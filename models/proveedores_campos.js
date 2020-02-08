/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proveedores_campos', {
    pc_idproveedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pc_idcampo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'proveedores_campos'
  });
};
