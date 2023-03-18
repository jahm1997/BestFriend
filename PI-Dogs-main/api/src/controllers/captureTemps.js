const { Temperaments } = require("../db");

const tempsCapture = (dataBase, data) => {
  if (!dataBase.length) {
    const temperaments = data.reduce((acc, dog) => {
      if (dog.temperament) {
        const split = dog.temperament.split(", ");
        return [...acc, ...split];
      } else {
        return acc;
      }
    }, []);

    const uniqueTemperaments = [...new Set(temperaments)];
    Temperaments.bulkCreate(uniqueTemperaments.map((t) => ({ name: t })));

    // Insertar los temperamentos en la base de datos
    return uniqueTemperaments;
  } else {
    return dataBase.map((t) => t.name);
  }
};

module.exports = tempsCapture;
