import { Router } from "express";
import {
  getAllPacks,
  getPackById,
  createPack,
  updatePack,
  deletePack,
} from "../controllers/pack.controller.js";

const packRouter = Router();

packRouter.get("/", getAllPacks);

packRouter.get("/:id", getPackById);

packRouter.post("/", createPack);

packRouter.put("/:id", updatePack);

packRouter.delete("/:id", deletePack);

export default packRouter;
