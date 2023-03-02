const { Router } = require("express");
const info = require("../CRUD/info");
const newDog = require("../CRUD/newdog");
const dogDetail = require("../CRUD/dog.js");
const favoritos = require("../CRUD/favorites");
const validation = require("../CRUD/routerValidation");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//supenmos que estamos en http:localhost:3001/registro/
router.use("/registro", validation);

router.use("/detail", dogDetail);

router.use("/form", newDog);

router.use("/About", info);

router.use("/favorites", favoritos);

module.exports = router;
