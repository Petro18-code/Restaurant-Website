import express from "express";
import { registerAdmin } from "../controllers/admin.controller.js";
const router = express.Router();

router.post("/register-admin", registerAdmin);

export default router;