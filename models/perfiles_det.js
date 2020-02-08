/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perfiles_det', {
    idperfil: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    perfildet_idsercosto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    perfildet_obligatorio: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    tableName: 'perfiles_det'
  });
};
