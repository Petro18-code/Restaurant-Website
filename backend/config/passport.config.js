import User from "../models/UserSchema.js";
import jwt from "jsonwebtoken";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import "dotenv/config";

const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK,
  },

  async function (accessToken, refreshToken, profile, passportNext) {
    const { given_name: name, family_name: surname, email, sub: googleid } = profile._json;

    try {
      let user = await User.findOne({ googleid });
      if (!user) {
        const newUser = new User({
          googleid,
          name,
          surname,
          email,
        });

        user = await newUser.save();
      }

      const jwtToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      return passportNext(null, { jwtToken });
    } catch (err) {
      console.error("Errore durante l'autenticazione con Google:", err);
      return passportNext(err, false);
    }
  }
);

export default googleStrategy;