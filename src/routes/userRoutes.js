import express from "express"
import { deleteUser, getUser, updateUser } from "../controllers/userController.js"

const userRoutes =express.Router()

userRoutes.get("/",getUser)
userRoutes.put("/",updateUser)
userRoutes.delete("/:id",deleteUser)

export default userRoutes