const { Router } = require("express");
const addDog = require("../controllers/addDog");

const router = Router();

//aqui van los CRUD del enlace registro

router.get("/", addDog);

module.exports = router;
