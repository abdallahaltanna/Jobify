import express from "express";
import { register, login, updateUser } from "../controllers/authControllers.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.patch("/updateUser", updateUser);

export default router;
