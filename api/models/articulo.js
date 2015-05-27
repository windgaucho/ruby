"use strict";
module.exports = function(sequelize, DataTypes) {
  var articulo = sequelize.define("articulo", {
    codigo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.DECIMAL
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return articulo;
};