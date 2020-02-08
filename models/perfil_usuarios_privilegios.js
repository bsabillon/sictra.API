/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perfil_usuarios_privilegios', {
    idperusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    perusr_idmodulo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    perusr_iditem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    perusr_idpriv: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    perusr_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'perfil_usuarios_privilegios'
  });
};
