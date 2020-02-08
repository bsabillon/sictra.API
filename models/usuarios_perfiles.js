/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios_perfiles', {
    idperusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idper_idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'usuarios_perfiles'
  });
};
