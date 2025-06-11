"use strict";
import { Animal } from "../models/index.js";
import sequelize from "../dbConnect.js";

const getAnimals = (res) => {
  Animal.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getAnimal = (req, res) => {
  Animal.findOne({ where: { id: req.params.id } })
    .then((data) => {
      if (!data) {
        return res.status(404).json({ error: "Animal not found" });
      }
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createAnimal = (data, res) => {
  Animal.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateAnimal = (req, res) => {
  Animal.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteAnimal = (req, res) => {
  Animal.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getAnimalBySize = async (req, res) => {
  try {
    const results = await sequelize.query(
      `
     SELECT animalId, breed, petName, birthdate
     FROM animal
     WHERE animal.animalId IN (
     SELECT identify.animalId
     FROM identify
     WHERE size = "${req.params.size}" );
     `,
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );
    if (results.length === 0) {
      return res.status(404).json({ error: "No animals found" });
    }
    console.log(results);
    res.json(results);
  } catch (err) {
    console.error("Raw query error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAnimalByMedicalCare = async (req, res) => {
  try {
    const results = await sequelize.query(
      `
     SELECT animalId, breed, petName
      FROM animal
      WHERE animal.animalId IN (
      SELECT medical.animalId
      FROM medical
      WHERE medicalCare = "${req.params.medicalCare}" );
     `,
      {
        replacements: {
          medicalCare: req.params.medicalCare,
        },
        type: sequelize.Sequelize.QueryTypes.SELECT,
      }
    );
    if (results.length === 0) {
      return res.status(404).json({ error: "No animals found" });
    }
    console.log(results);
    res.json(results);
  } catch (err) {
    console.error("Raw query error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default {
  getAnimals,
  getAnimal,
  createAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimalBySize,
  getAnimalByMedicalCare,
};
