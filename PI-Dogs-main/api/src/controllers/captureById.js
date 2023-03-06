const findById = (db, id) => {
  const dog = db.find(e => e.id === id);
  let response = {
    id: dog.id,
    name: dog.name,
    image: dog.image,
    weight: dog.weight,
    height: dog.height,
    life_span: dog.life_span,
    temperament: dog.temperament,
  };
  return response;
};

module.exports = findById;
