const favoritos = require("../utils/favoritos");

const addFavorite = (req, res) => {
  const objeto = req.body;
  try {
    favoritos.push(objeto);
    res.status(200).json(favoritos);
  } catch (error) {
    res.status(400).json({
      error: "hubo un error al añadir a favoritos",
    });
  }
};

module.exports = addFavorite;
