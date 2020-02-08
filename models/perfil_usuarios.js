/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perfil_usuarios', {
    idperusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    perusr_nombre: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    perusr_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'perfil_usuarios'
  });
};
