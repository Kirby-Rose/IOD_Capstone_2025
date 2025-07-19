import express from "express";
import { fullAnimalController } from "../controllers/index.js";
const router = express.Router();

router.get("/", (req, res) => {
  fullAnimalController.getAnimals(res);
});

router.get("/:id", (req, res) => {
  fullAnimalController.getAnimal(res);
});

router.post("/create", (req, res) => {
  fullAnimalController.createAnimal(req.body, res);
});

router.put("/:id", (req, res) => {
  fullAnimalController.updateAnimal(req, res);
});

router.delete("/:id", (req, res) => {
  fullAnimalController.deleteAnimal(req, res);
});

export default router;
