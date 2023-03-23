const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const dogs = require("./routes/dogRouter.js");
const temperamets = require("./routes/tempRouter.js");

require("./db.js");

const server = express();

server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  // res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//suponemos que estamos parados en la url:
//http:localhost:3001/, esta barra es la abajo
server.use("/dogs", dogs);
server.use("/temperaments", temperamets);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
