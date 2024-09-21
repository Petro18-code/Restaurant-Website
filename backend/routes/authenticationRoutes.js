import express from "express";
import {
  register,
  login,
  me,
  callbackGoogle,
} from "../controllers/authorization.controller.js";
import passport from "passport";
import authentication from "../middleware/authentication.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", authentication, me);

router.get(
  "/login-google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);
router.get(
  "/callback-google",
  passport.authenticate("google", { session: false }),
  callbackGoogle
);

export default router;
