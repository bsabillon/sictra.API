/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perfiles_control_det', {
    idpcontrol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pcontroldet_idsercosto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pcontroldet_obligatorio: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'perfiles_control_det'
  });
};
