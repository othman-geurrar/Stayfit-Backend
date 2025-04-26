import { Router } from "express";
import {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  createUser,
} from "../controllers/user.controller.js";
import { authorize, authorizeAdmin } from "../middlewares/auth.middleware.js";
const userRouter = Router();

userRouter.get("/", authorizeAdmin, getUsers);

userRouter.get("/:id", authorize, getUserById);

userRouter.post("/", createUser);

userRouter.put("/:id", authorize, updateUser);

userRouter.delete("/:id", authorize, deleteUser);

export default userRouter;
