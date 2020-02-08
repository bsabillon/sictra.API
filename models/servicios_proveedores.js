/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servicios_proveedores', {
    idsercosto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    serprov_idproveedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    serprov_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    serprov_total: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    serprov_costo_recepcion: {
      type: "DOUBLE",
      allowNull: true
    },
    serprov_costo_pagable: {
      type: "DOUBLE",
      allowNull: true
    },
    serprov_diaslibres: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    serprov_costoextra: {
      type: "DOUBLE",
      allowNull: true
    },
    serprov_pagaisv: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    serprov_condiciones: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    serprov_fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    serprov_vencimiento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    serprov_diaschassis: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'servicios_proveedores'
  });
};
