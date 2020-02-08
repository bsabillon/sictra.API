/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('puertos_regiones', {
    idpuerto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idregion: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'puertos_regiones'
  });
};
