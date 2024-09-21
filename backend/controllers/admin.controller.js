import Reservation from "../models/ReservationSchema.js";
import Review from "../models/ReviewSchema.js";

// Recuperare tutte le prenotazioni
export const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (err) {
    res.status(500).json({ message: "Errore nel recupero delle prenotazioni", error: err.message });
  }
};

// Recuperare tutte le recensioni
export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Errore nel recupero delle recensioni", error: err.message });
  }
};