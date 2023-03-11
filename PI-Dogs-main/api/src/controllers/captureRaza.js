const razaCapture = (myDogs, apiExterna, name) => {
  console.log("....Se ejecutó razacapture");

  const union = [...myDogs, apiExterna];
  let raza = union.filter(perro =>
    perro.name.toLowerCase().includes(name.toLowerCase())
  );
  return raza;
};
module.exports = razaCapture;

// const { Dog } = require("../db");

// const razaCapture = (perros, data, name) => {
//   console.log("....Se ejecutó razacapture");

//   if (!perros.length) {
//     const perros = data.map(elemento => {
//       return {
//         id: elemento.id,
//         name: elemento.name,
//         image: elemento.image.url,
//         weight: elemento.weight.metric,
//         height: elemento.height.metric,
//         life_span: elemento.life_span,
//       };
//     });
//     Dog.bulkCreate(perros.map(t => t));
//     let raza = perros.filter(perro =>
//       perro.name.toLowerCase().includes(name.toLowerCase())
//     );
//     return raza;
//   } else {
//     let raza = perros.filter(perro =>
//       perro.name.toLowerCase().includes(name.toLowerCase())
//     );
//     return raza;
//   }
// };

// module.exports = razaCapture;
