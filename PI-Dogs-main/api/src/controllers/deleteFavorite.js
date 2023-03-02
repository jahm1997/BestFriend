const favoritos = require("../utils/favoritos");

const deleteFavorite = (req, res) => {
  params = req.params;
  const nuevofiltro = favoritos.filter(char => char.id !== params.id);
  favoritos = nuevofiltro;
  res.status(200).json(favoritos);
};

module.exports = deleteFavorite;
