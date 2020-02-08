/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarcargo_idproveedor_transporte_origen', {
    tar_idtarcargo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tar_idproveedor_transporte_origen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'tarcargo_idproveedor_transporte_origen'
  });
};
