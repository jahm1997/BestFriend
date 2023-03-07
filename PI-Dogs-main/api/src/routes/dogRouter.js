const { Router } = require("express");
const postDog = require("../services/ServiceDog/postDog");
const getAllDogs = require("../services/serviceDog/getAllDogs");
const getDogById = require("../services/serviceDog/getDogId");

const router = Router();

//aqui van los CRUD del enlace registro

// router.get("/", getDogByName);

router.get("/", getAllDogs);

router.get("/:id", getDogById);

router.post("/add", postDog);

module.exports = router;