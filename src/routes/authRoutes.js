import express from "express"
import { login,signUp,forgot_password, reset_password, verify_otp } from "../controllers/authController.js";

const authRoutes=express.Router()

authRoutes.post("/signup",signUp)
authRoutes.post("/login",login)
authRoutes.post("/verify-otp", verify_otp);
authRoutes.post("/forgot_password", forgot_password);
authRoutes.post("/reset_password", reset_password);

export default authRoutes
