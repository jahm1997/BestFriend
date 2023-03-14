const { Dog } = require("../../db");
const axios = require("axios");
const captureDogs = require("../../controllers/captureDogs");

const todos = async (req, res) => {
  console.log("-----Se ejecutó getAllDogs.js------");
  const { name } = req.query;

  const perros = await axios.get("https://api.thedogapi.com/v1/breeds");
  const dataApi = perros.data;

  const dogs = await Dog.findAll();
  const dogsdos = dogs.map((perro) => perro.dataValues);

  try {
    if (!name) {
      const dataBase = captureDogs(dogsdos, dataApi);
      res.status(200).send(dataBase);
    } else {
      const database = captureDogs(dogsdos, dataApi, name);
      res.status(200).send(database);
      console.log("Estoy en serviceDog linea 19");
    }
  } catch (err) {
    res.status(400).end({ err: err.message });
  }
};

module.exports = todos;
