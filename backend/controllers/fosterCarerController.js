"use strict";
import { FosterCarer } from "../models/index.js";

const getFosterCarers = (res) => {
  FosterCarer.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getFosterCarer = (req, res) => {
  FosterCarer.findOne({ where: { id: req.params.id } })
    .then((data) => {
      if (!data) {
        return res.status(404).json({ error: "FosterCarer not found" });
      }
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createFosterCarer = (data, res) => {
  FosterCarer.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateFosterCarer = (req, res) => {
  FosterCarer.update(req.body, {
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

const deleteFosterCarer = (req, res) => {
  FosterCarer.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
export default {
  getFosterCarers,
  getFosterCarer,
  createFosterCarer,
  updateFosterCarer,
  deleteFosterCarer,
};
