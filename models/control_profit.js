/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('control_profit', {
    idprofit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    prof_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    prof_orden: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    prof_restringido: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    prof_porcentaje: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'control_profit'
  });
};
