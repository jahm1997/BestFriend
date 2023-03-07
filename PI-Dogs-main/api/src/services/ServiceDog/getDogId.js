const axios = require("axios");
const findById = require("../../controllers/captureById");

const url = "http://localhost:3001/dogs"; // param.id = 2

const getDogById = async (req, res) => {
  console.log("-----Se ejecutó getDogId.js------");

  const id = Number(req.params.id);

  const response = await axios.get(url);
  try {
    let objetivoPerruno = findById(response.data, id);
    res.status(200).send(objetivoPerruno);
  } catch (err) {
    res.status(400).end({ err: err.message });
  }
};

module.exports = getDogById;
