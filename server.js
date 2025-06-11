import express from "express";

import animalRoutes from "./routes/animalRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import indentifyRoutes from "./routes/indentifyRoutes.js";
import medicalRoutes from "./routes/medicalRoutes.js";
import personalityRoutes from "./routes/personalityRoutes.js";
import adoptionApplicantRoutes from "./routes/adoptionApplicantRoutes.js";
import careProvisionRoutes from "./routes/careProvisionRoutes.js";
import fosterCarerRoutes from "./routes/fosterCarerRoutes.js";
import homeYardRoutes from "./routes/homeYardRoutes.js";
import statusRoutes from "./routes/homeYardRoutes.js";
import surrenderingRoutes from "./routes/surrenderingRoutes.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MySQL application." });
});

app.use("/api/animal", animalRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/indentifying", indentifyRoutes);
app.use("/api/medical", medicalRoutes);
app.use("/api/personality", personalityRoutes);
app.use("/api/adoptionApplicant", adoptionApplicantRoutes);
app.use("./api/careProvision", careProvisionRoutes);
app.use("./api/fosterCarer", fosterCarerRoutes);
app.use("./api/homeYard", homeYardRoutes);
app.use("/api/status", statusRoutes);
app.use("/api/surrendering", surrenderingRoutes);

const PORT = process.env.PORT || 8073;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
