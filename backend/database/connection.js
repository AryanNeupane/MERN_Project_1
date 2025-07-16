require("dotenv").config(); // <-- Load .env variables at the top

const { Sequelize, DataTypes } = require("sequelize");

// Use the connection string from .env
const sequelize = new Sequelize(process.env.DB_URL);

sequelize.authenticate()
  .then(() => {
    console.log("Authenticated and connected");
  })
  .catch((err) => {
    console.log("Err0r: " + err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
