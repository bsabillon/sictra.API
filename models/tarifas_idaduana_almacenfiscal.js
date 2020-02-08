/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarifas_idaduana_almacenfiscal', {
    tar_idtarifa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tar_idaduana_almacenfiscal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'tarifas_idaduana_almacenfiscal'
  });
};
