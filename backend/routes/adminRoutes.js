import express from "express";
import { getReservations } from "../controllers/admin.controller.js";
import { isAdmin } from "../middleware/isAdmin.js";
const router = express.Router();

router.get("/reservations", isAdmin, getReservations);

export default router;