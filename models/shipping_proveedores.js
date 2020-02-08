/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shipping_proveedores', {
    ship_idship: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ship_idproveedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ship_idcontacto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'shipping_proveedores'
  });
};
