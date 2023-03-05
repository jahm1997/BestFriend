const { Dog } = require("../../db");
const axios = require("axios");

const url = "https://localhost:3001/dogs/"; // param.id = 2
const url2 = "https://api.thedogapi.com/v1/breeds/";

const getDogById = async (req, res) => {
  console.log("-----Se ejecutó getDogId.js------");
  const id = Number(req.params.id);
  const dbDogs = await Dog.findByPk(id);
  let objetivoPerruno = {
    id: dbDogs.dataValues.id,
    name: dbDogs.dataValues.name,
    image: dbDogs.dataValues.image,
    weight: dbDogs.dataValues.weight,
    height: dbDogs.dataValues.height,
    life_span: dbDogs.dataValues.life_span,
  };
  try {
    res.status(200).send(objetivoPerruno);
  } catch (err) {
    res.status(400).end({ err: err.message });
  }
  // await axios
  //   .get(url2)
  //   .then(response => response.data)
  //   .then(char => {
  //     const filtro = char.find(e => e.id === id);
  //     let objetivoPerruno = {
  //       id: filtro.id,
  //       name: filtro.name,
  //       images: filtro.image.url,
  //       weight: filtro.weight.metric,
  //       height: filtro.height.metric,
  //       life_span: filtro.life_span,
  //     };
  //     res
  //       .writeHead(200, { "Content-type": "application/json" })
  //       .end(JSON.stringify(objetivoPerruno));
  //   })
  //   //
  //   .catch(err =>
  //     res
  //       .writeHead(400, { "Content-type": "text/plain" })
  //       .end({ err: err.message })
  //   );
};

module.exports = getDogById;
