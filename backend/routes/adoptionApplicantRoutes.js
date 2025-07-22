import express from "express";
import { adoptionApplicantController } from "../controllers/index.js";
const router = express.Router();

router.get("/", (req, res) => {
  adoptionApplicantController.getAdoptionApplicants(res);
});

router.post("/create", (req, res) => {
  adoptionApplicantController.createAdoptionApplicant(req.body, res);
});

router.put("/:id", (req, res) => {
  adoptionApplicantController.updateAdoptionApplicant(req, res);
});

router.delete("/:id", (req, res) => {
  adoptionApplicantController.deleteAdoptionApplicant(req, res);
});

export default router;
