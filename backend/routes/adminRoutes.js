import express from "express";
import { deleteReservation, getReservations } from "../controllers/admin.controller.js";
import { isAdmin } from "../middleware/isAdmin.js";
import authentication from "../middleware/authentication.js";
const router = express.Router();

router.get("/all-reservations", authentication, isAdmin, getReservations);

router.delete("/delete-reservation/:id", authentication, isAdmin, deleteReservation);

export default router;