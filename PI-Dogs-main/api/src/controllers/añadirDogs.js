const { Dog } = require("../db");
const axios = require("axios");

const añadir = async newDog => {
  console.log("---Se ejecutó añadir dogs");
  const response = await axios.get("http://localhost:3001/dogs");
  const id = response.data[response.data.length - 1].id + 1;

  return await Dog.create({
    id: id,
    name: newDog.name,
    weight: newDog.weight,
    height: newDog.height,
    life_span: newDog.life_span,
    image: "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg",
  });
};

module.exports = añadir;
