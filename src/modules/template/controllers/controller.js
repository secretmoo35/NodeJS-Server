"use strict";
let mongoose = require("mongoose"),
  _model = require("../models/model").model,
  Model = mongoose.model(_model),
  errorHandler = require("../../core/controllers/errors.server.controller"),
  _ = require("lodash");

exports.getList = (req, res, next) => {
  Model.find((err, datas) => {
    if (err) {
      return res.status(400).send({
        status: 400,
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      req.data = datas;
      next();
    }
  }).lean();
};

exports.create = (req, res, next) => {
  let mongooseModel = new Model(req.body);
  mongooseModel.createby = req.user;
  mongooseModel.save((err, data) => {
    if (err) {
      return res.status(400).send({
        status: 400,
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      req.data = data;
      next();
    }
  });
};

exports.getByID = (req, res, next, id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      status: 400,
      message: "Id is invalid"
    });
  }

  Model.findById(id, (err, data) => {
    if (err) {
      return res.status(400).send({
        status: 400,
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      req.data = data ? data : {};
      next();
    }
  });
};

exports.update = (req, res, next) => {
  let mongooseModel = _.extend(req.data, req.body);
  mongooseModel.updated = new Date();
  mongooseModel.updateby = req.user;
  mongooseModel.save((err, data) => {
    if (err) {
      return res.status(400).send({
        status: 400,
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      req.data = data;
      next();
    }
  });
};

exports.delete = (req, res, next) => {
  req.data.remove((err, data) => {
    if (err) {
      return res.status(400).send({
        status: 400,
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      req.data = data;
      next();
    }
  });
};

exports.return = (req, res) => {
  res.jsonp({
    status: 200,
    data: req.data
  });
};