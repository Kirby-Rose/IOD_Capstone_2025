"use strict";
import { CareProvision } from "../models/index.js";

const getCareProvisions = (res) => {
  CareProvision.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createCareProvision = (data, res) => {
  CareProvision.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateCareProvision = (req, res) => {
  CareProvision.update(req.body, {
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

const deleteCareProvision = (req, res) => {
  CareProvision.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
export default {
  getCareProvisions,
  createCareProvision,
  updateCareProvision,
  deleteCareProvision,
};
