/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asesor_metas', {
    meta_idasesor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    meta_idmeta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'asesor_metas'
  });
};
