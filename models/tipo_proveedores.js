/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipo_proveedores', {
    idtipoproveedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipoproveedor_nombre: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    tipoproveedor_referencia: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'tipo_proveedores'
  });
};
