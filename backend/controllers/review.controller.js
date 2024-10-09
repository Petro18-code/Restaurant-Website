import Review from "../models/ReviewSchema.js";

// Creare una recensione
export const createReview = async (req, res) => {
  const { comment, rating } = req.body;
  const userId = req.params.userId;

  if (!comment || rating < 1 || rating > 5) {
    return res.status(400).json({ message: 'Invalid comment or rating' });
  }

  try {
    // Save the review to the database
    const newReview = new Review({ comment, rating, userId });
    await newReview.save();

    res.status(201).json({ message: 'Review submitted', review: newReview });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit review', error });
  }
};

// Recuperare tutte le recensioni
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate('userId', 'name');
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Errore nel recupero delle recensioni", error: err.message });
  }
};