const { Dog } = require("../../db");
const axios = require("axios");
const captureDogs = require("../../controllers/captureDogs");
const captureRaza = require("../../controllers/captureRaza");

const todos = async (req, res) => {
  console.log("-----Se ejecutó getAllDogs.js------");
  const { name } = req.query;

  const perros = await axios.get("https://api.thedogapi.com/v1/breeds");
  const dataApi = perros.data;

  const dogs = await Dog.findAll();

  try {
    if (name) {
      const dataBase_iff = captureRaza(dogs, dataApi, name);
      res.status(200).send(dataBase_iff);
    } else {
      console.log(dogs);
      const dataBase = captureDogs(dogs, dataApi);
      res.status(200).send(dataBase);
    }
  } catch (err) {
    res.status(400).end({ err: err.message });
  }
};

module.exports = todos;
