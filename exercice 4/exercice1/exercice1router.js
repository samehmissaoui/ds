
const express = require("express");
const {
    CREATEController,InsertController,SelectParkLaneController,SelectAdressSController
  
} = require("./exercice1Controller");

const exercice1Route = express.Router();

exercice1Route.get("/", SelectParkLaneController);
exercice1Route.post("/create/", CREATEController);
exercice1Route.delete("/", InsertController);
exercice1Route.get("/adress/", SelectAdressSController);


module.exports = exercice1Route;

