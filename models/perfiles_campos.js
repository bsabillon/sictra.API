/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perfiles_campos', {
    idperfil: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pcampos_idcampo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pcampos_obligatorio: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    pcampos_texto: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    pcampos_tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    tableName: 'perfiles_campos'
  });
};
