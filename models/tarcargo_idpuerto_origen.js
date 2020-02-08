/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarcargo_idpuerto_origen', {
    tar_idtarcargo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tar_idpuerto_origen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'tarcargo_idpuerto_origen'
  });
};
