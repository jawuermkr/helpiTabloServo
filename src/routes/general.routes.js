const express = require("express");
const routes = express.Router();

const generalController = require("../controlllers/general.controller");

routes.post("/create/:tabla", generalController.createGeneral);

module.exports = routes;