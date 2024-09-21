import express from "express";
import { createReservation, getAllReservations } from "../controllers/reservation.controller.js";
import isAdmin from "../middleware/isAdmin.js";

const router = express.Router();

router.post("/reservation", createReservation);
router.get("/reservations", isAdmin, getAllReservations);

export default router;