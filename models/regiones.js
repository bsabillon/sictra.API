/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('regiones', {
    idregion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    region_name: {
      type: DataTypes.STRING(120),
      allowNull: true
    }
  }, {
    tableName: 'regiones'
  });
};
