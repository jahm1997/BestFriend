const { Dog } = require("../db");

const addDog = (newDog, id) => {
  Dog.create({
    id: id,
    name: newDog.name,
    weight: newDog.weightUno + " - " + newDog.weightDos,
    height: newDog.heightUno + " - " + newDog.heightDos,
    life_span: newDog.life_span,
    temperament: newDog.temperamentos.join(", "),
    image: newDog.image,
  });
};
module.exports = addDog;
