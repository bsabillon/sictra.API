/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agentes_contenedores', {
    idagente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcontenedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'agentes_contenedores'
  });
};
