const { Temperaments } = require("../db");
const axios = require("axios");

// FUNCION QUE TRAE TODOS LOS TEMPERAMENTOS

const getTemperaments = async () => {
  // Buscar todos los temperamentos en la base de datos
  const dbTemperaments = await Temperaments.findAll();

  // Si hay temperamentos en la base de datos, devolverlos
  if (dbTemperaments.length > 0) {
    return dbTemperaments.map(t => t.name);
  }

  // Si no hay temperamentos en la base de datos, obtenerlos desde la API y guardarlos en la base de datos
  const data = (await axios.get("https://api.thedogapi.com/v1/breeds")).data;
  const temperaments = data.reduce((acc, dog) => {
    if (dog.temperament) {
      const split = dog.temperament.split(", ");
      return [...acc, ...split];
    } else {
      return acc;
    }
  }, []);

  const uniqueTemperaments = [...new Set(temperaments)];

  // Insertar los temperamentos en la base de datos
  await Temperaments.bulkCreate(uniqueTemperaments.map(t => ({ name: t })));

  return uniqueTemperaments;
};

module.exports = getTemperaments;
