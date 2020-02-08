/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('incoterms', {
    idincoterms: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    inco_siglas: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    inco_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    inco_tipo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    inco_pagomain: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    inco_riesgo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    inco_expimp: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    tableName: 'incoterms'
  });
};
