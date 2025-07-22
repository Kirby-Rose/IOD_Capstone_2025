import express from "express";
import { profileController } from "../controllers/index.js";
const router = express.Router();

router.get("/", (req, res) => {
  console.log("hit here");
  profileController.getProfiles(res);
});

router.get("/:id", (req, res) => {
  profileController.getProfile(res);
});

router.post("/create", (req, res) => {
  profileController.createProfile(req.body, res);
});

router.put("/:id", (req, res) => {
  profileController.updateProfile(req, res);
});

router.delete("/:id", (req, res) => {
  profileController.deleteProfile(req, res);
});

export default router;
