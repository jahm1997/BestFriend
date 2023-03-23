const axios = require("axios");
const addDog = require("../controllers/añadirDogs");

exports.sumar = async (req, res) => {
  const body = req.body;
  const response = await axios.get("http://localhost:3001/dogs");
  const id = response.data[response.data.length - 1].id + 1;

  try {
    // const { id, imagen, nombre, altura, peso, añosDeVida } = req.body;
    // await Dog.create({ id, imagen, nombre, altura, peso, añosDeVida });
    const dog = addDog(body, id);
    res.status(201).send(dog);
    // si fuera con .then y sin los awaiy y async entonces seria
    //Dog.create({ id, imagen, nombre, altura, peso, añosDeVida }).then(()=>{res.status(201).send("Creado con exito")})
  } catch (err) {
    res.status(400).end({ err: err.message });
  }
};
