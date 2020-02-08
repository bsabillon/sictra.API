/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clase_clientes', {
    idclasecliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    clasecliente_nombre: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    clasecliente_referencia: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'clase_clientes'
  });
};
