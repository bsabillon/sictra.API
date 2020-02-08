/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asesor_clientes', {
    acliente_idasesor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    acliente_idcliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'asesor_clientes'
  });
};
