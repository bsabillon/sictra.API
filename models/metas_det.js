/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('metas_det', {
    idmeta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    meta_idserviciocarga: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    meta_valor: {
      type: "DOUBLE",
      allowNull: true
    },
    meta_profit: {
      type: "DOUBLE",
      allowNull: true
    },
    meta_cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'metas_det'
  });
};
