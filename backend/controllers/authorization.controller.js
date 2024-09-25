import User from "../models/UserSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// Registrazione utente
export const register = async (req, res) => {
  const { name, surname, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email già registrata" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      surname,
      email,
      password: hashedPassword,
      role: "user"
    });

    const savedUser = await newUser.save();
    res.status(201).json({ message: "Utente registrato con successo", user: savedUser });
  } catch (err) {
    res.status(500).json({ message: "Errore del server", error: err.message });
  }
};

// Login utente
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Credenziali non valide" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: "Credenziali non valide" });

    const token = jwt.sign(
        { userId: user._id }, 
        process.env.JWT_SECRET, 
        { expiresIn: "1h" },
        (err, jwtToken) => {
            if (err) return res.status(500).send();
            return res.send({
                token: jwtToken
            })
        }
    );
  } catch (err) {
    res.status(500).json({ message: "Errore del server", error: err.message });
  }
};

export const me = async (req, res) => {
    return res.send(req.loggedUser)
};

export const callbackGoogle = (req, res) => {
    res.redirect(`http://localhost:3000?token=${req.user.jwtToken}`);
};