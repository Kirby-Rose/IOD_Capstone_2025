"use strict";
import { Profile } from "../models/index.js";

const getProfiles = (res) => {
  console.log("hit here");
  Profile.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getProfile = (req, res) => {
  Profile.findOne({ where: { id: req.params.id } })
    .then((data) => {
      if (!data) {
        return res.status(404).json({ error: "Profile not found" });
      }
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createProfile = (data, res) => {
  Profile.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateProfile = (req, res) => {
  Profile.update(req.body, {
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

const deleteProfile = (req, res) => {
  Profile.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

export default {
  getProfiles,
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
};
