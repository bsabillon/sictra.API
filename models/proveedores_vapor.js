/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proveedores_vapor', {
    idvapor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vapor_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    vapor_idproveedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'proveedores_vapor'
  });
};
