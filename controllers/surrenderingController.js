"use strict";
import { Surrendering } from "../models/index.js";

const getSurrenderings = (res) => {
  Surrendering.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getSurrendering = (req, res) => {
  Surrendering.findOne({ where: { id: req.params.id } })
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

const createSurrendering = (data, res) => {
  Surrendering.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateSurrendering = (req, res) => {
  Surrendering.update(req.body, {
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

const deleteSurrendering = (req, res) => {
  Surrendering.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
export default {
  getSurrenderings,
  getSurrendering,
  createSurrendering,
  updateSurrendering,
  deleteSurrendering,
};
