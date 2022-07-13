"use strict";

const path = require("path");
require("dotenv").config({ path: path.join(__dirname + "/../configdata.env") });

const { Sequelize, Model, DataTypes } = require("sequelize");
const initModels = require("./init-models");

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DBUSER,
  process.env.PASSWORD,
  {
    dialect: "postgres",
  }
);

let models = initModels(sequelize);

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
