import express from "express";
import { fosterCarerController } from "../controllers/index.js";
const router = express.Router();

router.get("/", (req, res) => {
  fosterCarerController.getFosterCarers(res);
});

router.get("/:id", (req, res) => {
  fosterCarerController.getFosterCarer(res);
});

router.post("/create", (req, res) => {
  fosterCarerController.createFosterCarer(req.body, res);
});

router.put("/:id", (req, res) => {
  fosterCarerController.updateFosterCarer(req, res);
});

router.delete("/:id", (req, res) => {
  fosterCarerController.deleteFosterCarer(req, res);
});

export default router;
