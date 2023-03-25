const { Router } = require("express");
const postDog = require("../services/postDog");
const { todos } = require("../services/getAllDogs");
const getDogById = require("../services/getDogId");

const router = Router();

//aqui van los CRUD del enlace registro
router.get("/", todos);

router.get("/:id", getDogById.getDogById);

router.post("/add", postDog.sumar);

module.exports = router;
