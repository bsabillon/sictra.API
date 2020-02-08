/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarifas_gestion_region_destino', {
    reg_idgestion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    reg_idregion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'tarifas_gestion_region_destino'
  });
};
