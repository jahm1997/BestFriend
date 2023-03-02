const { Dog } = require("../db");
const añadirDogs = require("../controllers/añadirDogs");

const addDog = async (req, res) => {
  try {
    // const { id, imagen, nombre, altura, peso, añosDeVida } = req.body;
    // await Dog.create({ id, imagen, nombre, altura, peso, añosDeVida });
    añadirDogs(req.body);
    res.status(201).send("creado con exito");

    // si fuera con .then y sin los awaiy y async entonces seria
    //Dog.create({ id, imagen, nombre, altura, peso, añosDeVida }).then(()=>{res.status(201).send("Creado con exito")})
  } catch (err) {
    res.status(400).end({ err: err.message });
  }
};

module.exports = addDog;
