import express from "express";
import { homeYardController } from "../controllers/index.js";
const router = express.Router();

router.get("/", (req, res) => {
  homeYardController.getHomeYards(res);
});

router.post("/create", (req, res) => {
  homeYardController.createHomeYard(req.body, res);
});

router.put("/:id", (req, res) => {
  homeYardController.updateHomeYard(req, res);
});

router.delete("/:id", (req, res) => {
  homeYardController.deleteHomeYard(req, res);
});

export default router;
