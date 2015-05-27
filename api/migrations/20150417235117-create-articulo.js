"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("Articulos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      codigo: {
        type: DataTypes.STRING
      },
      descripcion: {
        type: DataTypes.STRING
      },
      precio: {
        type: DataTypes.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("Articulos").done(done);
  }
};