import express from "express";
import { statusController } from "../controllers/index.js";
const router = express.Router();

router.get("/", (req, res) => {
  statusController.getStatuses(res);
});

router.post("/create", (req, res) => {
  statusController.createStatus(req.body, res);
});

router.put("/:id", (req, res) => {
  statusController.updateStatus(req, res);
});

router.delete("/:id", (req, res) => {
  statusController.deleteStatus(req, res);
});

export default router;
