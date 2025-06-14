import express from "express";
import { careProvisionController } from "../controllers/index.js";
const router = express.Router();

router.get("/", (req, res) => {
  careProvisionController.getCareProvisions(res);
});

router.post("/create", (req, res) => {
  careProvisionController.createCareProvision(req.body, res);
});

router.put("/:id", (req, res) => {
  careProvisionController.updateCareProvision(req, res);
});

router.delete("/:id", (req, res) => {
  careProvisionController.deleteCareProvision(req, res);
});

export default router;
