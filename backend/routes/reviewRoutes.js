import express from 'express'
import { createReview, getAllReviews } from "../controllers/review.controller.js";

const router = express.Router();

router.post("/review", createReview);
router.get("/reviews", getAllReviews);

export default router;