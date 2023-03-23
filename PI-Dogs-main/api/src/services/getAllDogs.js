const { Dog } = require("../db");
const axios = require("axios");
const captureDogs = require("../controllers/captureDogs.js");

exports.todos = async (req, res) => {
  const { name, limit } = req.query;

  const perros = await axios.get("https://api.thedogapi.com/v1/breeds");
  const dataApi = perros.data;

  const dogs = await Dog.findAll();
  const dogsdos = dogs.map((perro) => perro.dataValues);

  try {
    if (limit) {
      const dataBase = captureDogs(dogsdos, dataApi);
      return res.status(200).send(dataBase.slice(0, Number(limit)));
    } else if (name) {
      const database = captureDogs(dogsdos, dataApi, name);
      return res.status(200).send(database);
    } else {
      const dataBase = captureDogs(dogsdos, dataApi);
      return res.status(200).send(dataBase);
    }
  } catch (err) {
    console.log(err, "Este es el error en la linea 26");
    return res.status(400).end({ err: err.message });
  }
};
