const { Dog } = require("../db");
const axios = require("axios");
const listaDogs = require("../controllers/listaDogs");
const listaXraza = require("../controllers/listaXraza");

const todos = async (req, res) => {
  const { name } = req.query;
  console.log(name);

  const perros = await axios("https://api.thedogapi.com/v1/breeds");
  const dogs = await Dog.findAll();
  try {
    if (name) {
      const DBext = listaXraza(perros.data, name);
      const DBint = listaXraza(dogs, name);
      const dataBase = [...DBext, ...DBint];
      res.status(200).send(dataBase);
    } else {
      const apiDogs = listaDogs(perros.data);
      const dataBase = [...apiDogs, ...dogs];
      res.status(200).send(dataBase);
    }
  } catch (err) {
    res.status(400).end({ err: err.message });
  }
};

module.exports = todos;
