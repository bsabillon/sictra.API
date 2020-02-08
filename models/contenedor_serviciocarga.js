/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contenedor_serviciocarga', {
    cont_idcontenedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cont_idserviciocarga: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'contenedor_serviciocarga'
  });
};
