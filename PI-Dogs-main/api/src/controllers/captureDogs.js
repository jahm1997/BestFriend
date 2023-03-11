const Dogscapture = (dogs, data, name, id) => {
  const perrosApi = data.map(elemento => {
    return {
      id: elemento.id,
      name: elemento.name,
      image: elemento.image.url,
      weight: elemento.weight.metric,
      height: elemento.height.metric,
      life_span: elemento.life_span,
      temperament: elemento.temperament,
    };
  });
  const perrosDB = dogs.map(elemento => {
    return {
      id: elemento.id,
      name: elemento.name,
      image: elemento.image,
      weight: elemento.weight.metric,
      height: elemento.height.metric,
      life_span: elemento.life_span,
      temperament: elemento.temperament,
    };
  });
  //transformación a array ?.split("-")
  if (name) {
    const union = [...perrosApi, ...perrosDB];
    let raza = union.filter(perro =>
      perro.name.toLowerCase().includes(name.toLowerCase())
    );
    return raza;
  } else {
    const union = [...perrosApi, ...perrosDB];
    return union;
  }
};

module.exports = Dogscapture;

// const { Dog } = require("../db");

// const Dogscapture = (dogs, data) => {
//   console.log("....Se ejecutó dogscapture");
//   if (dogs.length === 0) {
//     const perros = data.map(elemento => {
//       return {
//         id: elemento.id,
//         name: elemento.name,
//         image: elemento.image.url,
//         weight: elemento.weight.metric,
//         height: elemento.height.metric,
//         life_span: elemento.life_span,
//         temperament: elemento.temperament,
//       };
//     });
//     Dog.bulkCreate(perros.map(t => t));
//     console.log("se tuvo que crear base de datos");
//     return perros;
//   } else {
//     const perrosRigth = dogs.map(elemento => {
//       return {
//         id: elemento.id,
//         name: elemento.name,
//         image: elemento.image,
//         weight: elemento.weight,
//         height: elemento.height,
//         life_span: elemento.life_span,
//         temperament: elemento.temperament,
//       };
//     });
//     console.log("se trajó info de nuestro database");
//     return perrosRigth;
//   }
// };

// module.exports = Dogscapture;
