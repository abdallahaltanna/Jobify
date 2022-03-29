import express from "express";
import { register, login, updateUser } from "../controllers/authControllers.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.patch("/updateUser", auth, updateUser);

export default router;
