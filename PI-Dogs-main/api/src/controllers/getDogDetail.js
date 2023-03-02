const axios = require("axios");

const url = "https://localhost:3001/detail/"; // param.id = 2

const getDogById = (req, res) => {
  params = req.params;
  axios
    .get(url + params.id)
    //o validamos si la respuesta es correcta con
    //.then(res=>res.ok?res.json():Promise.reject(res))
    .then(response => response.data)
    .then(data => {
      let perro = {
        //props del perro
      };
      res
        .writeHead(200, { "Content-type": "application/json" })
        .end(JSON.stringify(perro));
    })
    .catch(err =>
      res
        .writeHead(200, { "Content-type": "text/plain" })
        .end({ err: err.message })
    );
};

module.exports = getDogById;
