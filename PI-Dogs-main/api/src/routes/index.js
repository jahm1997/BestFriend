const { Router } = require("express");
const info = require("../middlewares/info");
const allDogs = require("../middlewares/dogInfo");
const favoritos = require("../middlewares/favorites");
const validation = require("../middlewares/Users");
const getTemps = require("../middlewares/Temps");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//supenmos que estamos en http:localhost:3001/registro/
router.use("/dogs", allDogs);

router.use("/registro", validation);

router.use("/About", info);

router.use("/favorites", favoritos);

router.use("/temperaments", getTemps);

module.exports = router;
