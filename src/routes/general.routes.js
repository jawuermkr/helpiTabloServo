const express = require("express");
const routes = express.Router();

const generalController = require("../controlllers/general.controller");

routes.post("/create/:tabla", generalController.createGeneral);
routes.delete("/delete/:tabla/:id/:value", generalController.delete);
routes.get("/get/:tabla/:campo/:value", generalController.consulta);
routes.put("/update/:tabla/:campo/:value", generalController.actualiza);

module.exports = routes;