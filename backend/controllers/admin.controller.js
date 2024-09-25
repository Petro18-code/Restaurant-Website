import User from "../models/UserSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Reservation from "../models/ReservationSchema.js";

// Admin Registration (One-Time Setup)
export const registerAdmin = async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;

    const adminExists = await User.findOne({ isAdmin: true });
    if (adminExists) {
      return res.status(403).json({ message: "Admin already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new User({
      name,
      surname,
      email,
      password: hashedPassword,
      role: "admin",
      isAdmin: true,
    });

    await newAdmin.save();
    res.status(201).json({ message: "Admin registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error registering admin", error });
  }
};
export const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reservations", error });
  }
};