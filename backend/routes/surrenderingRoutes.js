import express from "express";
import { surrenderingController } from "../controllers/index.js";
const router = express.Router();

router.get("/", (req, res) => {
  surrenderingController.getSurrenderings(res);
});

router.get("/:id", (req, res) => {
  surrenderingController.getSurrendering(res);
});

router.post("/create", (req, res) => {
  surrenderingController.createSurrendering(req.body, res);
});

router.put("/:id", (req, res) => {
  surrenderingController.updateSurrendering(req, res);
});

router.delete("/:id", (req, res) => {
  surrenderingController.deleteSurrendering(req, res);
});

export default router;
