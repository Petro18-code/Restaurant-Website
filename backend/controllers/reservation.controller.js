import Reservation from "../models/ReservationSchema.js";

export const createReservation = async (req, res) => {
  try {
    const { name, email, date, time, guests } = req.body;
    const userId = req.user ? req.user._id : null;

    const existingReservations = await Reservation.find({ date, time });
    const totalGuests = existingReservations.reduce((acc, curr) => acc + curr.guests, 0);

    const maxGuestsPerTimeSlot = 5;

    if (totalGuests + guests > maxGuestsPerTimeSlot) {
      return res.status(400).json({ error: "No available tables at the selected time" });
    }

    const newReservation = new Reservation({
      userId,
      name,
      email,
      date,
      time,
      guests,
    });

    const savedReservation = await newReservation.save();

    res.status(201).json(savedReservation);
  } catch (error) {
    res.status(500).json({ error: "Failed to create reservation" });
  }
};

export const getUserReservations = async (req, res) => {
  try {
    const userId = req.user._id;
    const reservations = await Reservation.find({ userId });
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve reservations" });
  }
};