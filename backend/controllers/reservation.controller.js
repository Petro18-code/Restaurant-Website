import Reservation from "../models/ReservationSchema.js";

// Creare una prenotazione
export const createReservation = async (req, res) => {
  const { name, email, date, time, guests } = req.body;

  try {
    const newReservation = new Reservation({
      name,
      email,
      date,
      time,
      guests,
    });

    const savedReservation = await newReservation.save();
    res.status(201).json({ message: "Prenotazione effettuata con successo", reservation: savedReservation });
  } catch (err) {
    res.status(500).json({ message: "Errore del server", error: err.message });
  }
};