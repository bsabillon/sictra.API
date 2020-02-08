/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientes_contacto', {
    idcliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cliente_idcontacto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'clientes_contacto'
  });
};
