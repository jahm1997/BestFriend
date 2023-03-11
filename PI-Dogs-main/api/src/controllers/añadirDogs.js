const { Dog } = require("../db");

const añadir = (newDog, id) =>
  Dog.create({
    id: id,
    name: newDog.name,
    weight: newDog.weightUno + " - " + newDog.weightDos,
    height: newDog.heightUno + " - " + newDog.heightDos,
    life_span: newDog.life_span,
    temperament: newDog.temperament,
    image: "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg",
  });
module.exports = añadir;
