const captureById = (dogs, data, id) => {
  console.log("llegó aqui linea 2");
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
  const union = [...perrosApi, ...perrosDB];
  let response = union.filter(perro => perro.id === id);
  console.log(response);
  return response;
};

module.exports = captureById;
