import express from "express";
import { signin, signup } from "../controllers/auth";
import { delteUser, getUsers, updateUser } from "../controllers/user";
const authRouter = express.Router()

authRouter.post('/signup',signup)
authRouter.post('/login',signin)
authRouter.get('/api/users',getUsers)
authRouter.patch('/api/users/:id',updateUser)
authRouter.delete('/api/users/:id',delteUser)

export default authRouter