const añadirDogs = require("../../controllers/añadirDogs");

const sumar = async (req, res) => {
  const body = req.body;
  // console.log(body);
  try {
    // const { id, imagen, nombre, altura, peso, añosDeVida } = req.body;
    // await Dog.create({ id, imagen, nombre, altura, peso, añosDeVida });
    const dog = añadirDogs(body);
    res.status(201).send(dog);
    // si fuera con .then y sin los awaiy y async entonces seria
    //Dog.create({ id, imagen, nombre, altura, peso, añosDeVida }).then(()=>{res.status(201).send("Creado con exito")})
  } catch (err) {
    res.status(400).end({ err: err.message });
  }
};

module.exports = sumar;
