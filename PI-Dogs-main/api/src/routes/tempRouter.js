const { Router } = require("express");
const getTemps = require("../services/getTemps");
// const dogInformation = require("./dogInformation");

const router = Router();

//aqui van los CRUD del enlace registro

// router.get("/", getDogByName);

router.use("/", getTemps);

module.exports = router;
