const { Router } = require("express");
const addDog = require("../helpers/addDog");
const getAllDogs = require("../helpers/getAllDogs");
const getDogById = require("../helpers/getDogId");
// const dogInformation = require("./dogInformation");

const router = Router();

//aqui van los CRUD del enlace registro

// router.get("/", getDogByName);
router.get("/", getAllDogs);

router.post("/añadir", addDog);

router.use("/:idRaza", getDogById);

module.exports = router;
