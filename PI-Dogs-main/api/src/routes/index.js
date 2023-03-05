const { Router } = require("express");
const info = require("./info");
const allDogs = require("./dogRouter");
const getTemps = require("./tempRouter");
const favoritos = require("./favorites");
const validation = require("./Users");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//supenmos que estamos en http:localhost:3001/registro/
router.use("/dogs", allDogs);

router.use("/temperaments", getTemps);

// router.use("/registro", validation);

// router.use("/About", info);

// router.use("/favorites", favoritos);

module.exports = router;
