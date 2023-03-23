require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY, DB_NAME, PORT } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${PORT}/${DB_NAME}`,
  // DB_DEPLOY,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

// const sequelize = new Sequelize("dogs_su0k", DB_USER, DB_PASSWORD, {
//   host: DB_HOST,
//   dialect: "postgres",
//   logging: false,
// });

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Dog, Temperaments } = sequelize.models;
// console.log(entries);
// console.log(capsEntries);
// console.log(sequelize.models);
// console.log(Dog, Temperaments);
// console.log("---- aqui acaba db.js----");

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

//Aqui agregamos los modelos
Dog.belongsToMany(Temperaments, { through: "Dog_Temperaments" });
Temperaments.belongsToMany(Dog, { through: "Dog_Temperaments" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
