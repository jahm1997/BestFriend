const axios = require("axios");

const perros = axios("https://api.thedogapi.com/v1/breeds/");
const apiDogs = perros.data.map((char) => {
  return {
    id: char.id,
    name: char.name,
    images: char.image?.url,
    weight: char.weight.metric,
    height: char.height.metric,
    life_span: char.life_span,
  };
});

module.exports = apiDogs;
