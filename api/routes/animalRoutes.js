const express = require("express");
const { getAllAnimals } = require("controllers/animalControllers");

const router = express.Router();

router.get("/", getAllAnimals);
module.exports = router;
