import express from "express";
import { createReservation, getUserReservations } from "../controllers/reservation.controller.js";
import authentication from "../middleware/authentication.js";

const router = express.Router();

router.post("/", authentication, createReservation);

router.get("/my-reservations", authentication, getUserReservations)

export default router;