listaRaza = (array, name) => {
  let newList = array.map(elemento => {
    return {
      id: elemento.id,
      name: elemento.name,
      images: elemento.image?.url,
      weight: elemento.weight?.metric,
      height: elemento.height?.metric,
      life_span: elemento.life_span,
    };
  });
  let raza = newList.filter(perro =>
    perro.name.toLowerCase().includes(name.toLowerCase())
  );
  return raza;
};

module.exports = listaRaza;
