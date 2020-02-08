/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crm_rutas', {
    idruta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ruta_nombre: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    ruta_observaciones: {
      type: DataTypes.STRING(120),
      allowNull: true
    }
  }, {
    tableName: 'crm_rutas'
  });
};
