const { Router } = require("express");
const addDog = requite("../controllers/addDog");

const router = Router();

//aqui van los CRUD del enlace registro

router.get("/", addDog);
