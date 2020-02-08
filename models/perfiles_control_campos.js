/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perfiles_control_campos', {
    idpcontrol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pcontrol_idcampo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pcontrol_obligatorio: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    pcontrol_texto: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    pcontrol_tipo: {
      type: DataTypes.CHAR(15),
      allowNull: true
    }
  }, {
    tableName: 'perfiles_control_campos'
  });
};
