const { Dog } = require("../db");

const añadir = async elemento => {
  await Dog.create({
    id: elemento.id,
    name: elemento.name,
    images: elemento.image?.url,
    weight: elemento.weight.metric,
    height: elemento.height.metric,
    life_span: elemento.life_span,
  });
};

module.export = añadir;
