import express from "express";
import { createUser, deleteUser, getSingleUser, getSingleUserReviews, updateUser } from "../controllers/user.controller.js";
const router = express.Router();

router.get("/:id", getSingleUser);
router.get("/:id/reviews", getSingleUserReviews);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;