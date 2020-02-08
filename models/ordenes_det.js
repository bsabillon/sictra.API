/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ordenes_det', {
    idordendet: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idorden: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    odet_comentarios: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ''
    },
    odet_idcontenedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    odet_idbooking: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    odet_idsercosto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    odet_cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    odet_costo: {
      type: "DOUBLE",
      allowNull: true
    },
    odet_isv: {
      type: "DOUBLE",
      allowNull: true
    },
    odet_total: {
      type: "DOUBLE",
      allowNull: true
    },
    odet_MBL: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    odet_numcontenedor: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    odet_HBL: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    tableName: 'ordenes_det'
  });
};
