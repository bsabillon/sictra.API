/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crm_zonas', {
    idzona: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    zona_nombre: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    zona_observaciones: {
      type: DataTypes.STRING(120),
      allowNull: true
    }
  }, {
    tableName: 'crm_zonas'
  });
};
