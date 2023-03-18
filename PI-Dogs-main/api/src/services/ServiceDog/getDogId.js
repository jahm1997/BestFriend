const axios = require("axios");
const captureById = require("../../controllers/captureById");
const { Dog } = require("../../db");

const getDogById = async (req, res) => {
  const perros = await axios.get("https://api.thedogapi.com/v1/breeds");
  const dataApi = perros.data;
  const dogs = await Dog.findAll();
  const dogsdos = dogs.map((perro) => perro.dataValues);

  const id = Number(req.params.id);
  try {
    let objetivoPerruno = captureById(dogsdos, dataApi, id);
    res.status(200).send(objetivoPerruno);
  } catch (err) {
    res.status(400).end({ err: err.message });
  }
};

module.exports = getDogById;
