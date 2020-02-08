/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agentes_serviciocarga', {
    idagente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idserviciocarga: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'agentes_serviciocarga'
  });
};
