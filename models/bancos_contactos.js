/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bancos_contactos', {
    idbanco: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    banco_idcontacto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'bancos_contactos'
  });
};
