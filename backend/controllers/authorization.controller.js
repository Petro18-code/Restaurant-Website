import User from "../models/UserSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// Registrazione utente
export const register = async (req, res) => {
  const { name, surname, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email già registrata" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      surname,
      email,
      password: hashedPassword,
      role: "user",
    });

    const savedUser = await newUser.save();
    res
      .status(201)
      .json({ message: "Utente registrato con successo", user: savedUser });
  } catch (err) {
    res.status(500).json({ message: "Errore del server", error: err.message });
  }
};

// Login utente
export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email }).select(
    "+password"
  );
  if (!user) return res.status(401).send("Incorrect Credentials");

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!isPasswordValid) return res.status(401).send("Incorrect Credentials");

  jwt.sign(
    { userId: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "12h" },
    (err, jwtToken) => {
      if (err) return res.status(500).send();
      return res.send({
        token: jwtToken,
      });
    }
  );
};

export const me = async (req, res) => {
  // return res.send(req.loggedUser)
  try {
    const user = await User.findById(req.loggedUser._id);
    if (!user) {
      return res.status(404).json({ error: 'Utente non trovato' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Errore del server' });
  }
};

export const callbackGoogle = (req, res) => {
  res.redirect(`http://localhost:3000?token=${req.user.jwtToken}`);
};
