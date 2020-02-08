/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('programacion_clientes', {
    pcliente_idprog: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pcliente_idcliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pcliente_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    pcliente_idevento_agenda: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'programacion_clientes'
  });
};
