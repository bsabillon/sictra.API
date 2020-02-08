/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perfiles_seguimiento_campos', {
    idperfilseg: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    perseg_idcampo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    perseg_obligatorio: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    perseg_texto: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    perseg_tipo: {
      type: DataTypes.CHAR(15),
      allowNull: true
    }
  }, {
    tableName: 'perfiles_seguimiento_campos'
  });
};
