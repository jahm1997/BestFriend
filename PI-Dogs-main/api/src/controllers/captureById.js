const findById = (db, id) => {
  const dog = db.find(e => e.id === id);
  return dog;
};

module.exports = findById;
