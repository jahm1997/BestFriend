const axios = require("axios");

const url = "https://localhost:3001/home/"; // param.id = 2
const url2 = "https://api.thedogapi.com/v1/breeds/";

const getDogById = async (req, res) => {
  const id = Number(req.params.idRaza);
  console.log(req);
  await axios
    .get(url2 + id)
    .then(response => response.data)
    .then(char => {
      let objetivoPerruno = {
        id: char.id,
        name: char.name,
        images: char.image?.url,
        weight: char.weight.metric,
        height: char.height.metric,
        life_span: char.life_span,
      };
      res
        .writeHead(200, { "Content-type": "application/json" })
        .end(JSON.stringify(objetivoPerruno));
    })
    .catch(err =>
      res
        .writeHead(400, { "Content-type": "text/plain" })
        .end({ err: err.message })
    );
};

module.exports = getDogById;
