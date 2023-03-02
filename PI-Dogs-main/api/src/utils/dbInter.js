const { Dog } = require("../db");

const dogs = Dog.findAll();

module.exports = dogs;
