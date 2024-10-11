import express from "express";
import { deleteReservation, getAllUsers, getReservations } from "../controllers/admin.controller.js";
import { isAdmin } from "../middleware/isAdmin.js";
import authentication from "../middleware/authentication.js";
const router = express.Router();

router.get("/all-reservations", authentication, isAdmin, getReservations);

router.get("/all-users", authentication, isAdmin, getAllUsers);

router.delete("/delete-reservation/:id", authentication, isAdmin, deleteReservation);

export default router;