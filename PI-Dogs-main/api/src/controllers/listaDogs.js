listaDogs = array => {
  let newList = array.map(elemento => {
    return {
      id: elemento.id,
      name: elemento.name,
      images: elemento.image?.url,
      weight: elemento.weight.metric,
      height: elemento.height.metric,
      life_span: elemento.life_span,
    };
  });
  return newList;
};

module.exports = listaDogs;
