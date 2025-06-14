"use strict";
import { AdoptionApplicant } from "../models/index.js";

const getAdoptionApplicants = (res) => {
  AdoptionApplicant.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getAdoptionApplicant = (req, res) => {
  AdoptionApplicant.findOne({ where: { id: req.params.id } })
    .then((data) => {
      if (!data) {
        return res.status(404).json({ error: "Contact not found" });
      }
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createAdoptionApplicant = (data, res) => {
  AdoptionApplicant.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateAdoptionApplicant = (req, res) => {
  AdoptionApplicant.update(req.body, {
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

const deleteAdoptionApplicant = (req, res) => {
  AdoptionApplicant.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
export default {
  getAdoptionApplicants,
  getAdoptionApplicant,
  createAdoptionApplicant,
  updateAdoptionApplicant,
  deleteAdoptionApplicant,
};
