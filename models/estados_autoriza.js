/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estados_autoriza', {
    idestado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    autoriza_idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'estados_autoriza'
  });
};
