import Review from "../models/ReviewSchema.js";

// Creare una recensione
export const createReview = async (req, res) => {
  const { userId, rating, comment } = req.body;

  try {
    const newReview = new Review({
      userId,
      rating,
      comment,
    });

    const savedReview = await newReview.save();
    res.status(201).json({ message: "Recensione aggiunta con successo", review: savedReview });
  } catch (err) {
    res.status(500).json({ message: "Errore nel server", error: err.message });
  }
};

// Recuperare tutte le recensioni
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Errore nel recupero delle recensioni", error: err.message });
  }
};