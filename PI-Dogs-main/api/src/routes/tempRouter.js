const { Router } = require("express");
const { getTemperaments } = require("../services/getTemps");
// const dogInformation = require("./dogInformation");

const router = Router();

//aqui van los CRUD del enlace registro

// router.get("/", getDogByName);

router.use("/", getTemperaments);

module.exports = router;
