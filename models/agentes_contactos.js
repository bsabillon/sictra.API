/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agentes_contactos', {
    idagente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcontacto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'agentes_contactos'
  });
};
