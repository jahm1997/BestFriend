const { Temperaments } = require("../db");
const axios = require("axios");
const captureTemps = require("../controllers/captureTemps");

// FUNCION QUE TRAE TODOS LOS TEMPERAMENTOS

exports.getTemperaments = async (req, res) => {
  const dbTemperaments = await Temperaments.findAll();
  const response = await axios.get("https://api.thedogapi.com/v1/breeds");
  const dataApi = response.data;
  try {
    const baseTemps = captureTemps(dbTemperaments, dataApi);
    res.status(200).send(baseTemps);
  } catch (error) {
    res.status(400).end({ error: error.message });
  }
};
