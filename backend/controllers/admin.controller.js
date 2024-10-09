import User from "../models/UserSchema.js";
import bcrypt from "bcrypt";
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

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await User.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: "Invalid email or password" });
    } else if (!admin.isAdmin) {
      return res.status(403).json({ message: "You are not an admin" });
    }
} catch (error) {
    res.status(500).json({ message: "Error logging in admin", error });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

export const deleteReservation = async (req, res) => {
  try {
    const reservationId = req.params.id;
    await Reservation.findByIdAndDelete(reservationId);
    res.status(200).json({ message: "Reservation deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting reservation", error });
  }
}

export const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reservations", error });
  }
};