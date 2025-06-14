import express from "express";
import { identifyController } from "../controllers/index.js";
const router = express.Router();

router.get("/", (req, res) => {
  identifyController.getIdentifys(res);
});

router.post("/create", (req, res) => {
  identifyController.createIdentify(req.body, res);
});

router.put("/:id", (req, res) => {
  identifyController.updateIdentify(req, res);
});

router.delete("/:id", (req, res) => {
  identifyController.deleteIdentify(req, res);
});

export default router;
