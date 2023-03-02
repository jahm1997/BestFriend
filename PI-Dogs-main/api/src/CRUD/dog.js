const { Router } = require("express");
const getDogById = require("../controllers/getDogDetail");

const router = Router();

//aqui van los CRUD del enlace registro

router.get("/", getDogById);

module.exports = router;
