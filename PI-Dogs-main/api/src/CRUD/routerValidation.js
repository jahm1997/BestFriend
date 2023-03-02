const { Router } = require("express");
const addUser = require("../controllers/addUser");

const router = Router();

//aqui van los CRUD del enlace registro

//cuando esté en registro hará los CRUD
router.post("/", addUser);

module.exports = router;
