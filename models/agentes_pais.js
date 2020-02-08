/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agentes_pais', {
    idagente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idpais: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'agentes_pais'
  });
};
