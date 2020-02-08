/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servicios_costos', {
    idsercosto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sercosto_nombre: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    sercosto_referencia: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    sercosto_estado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    tableName: 'servicios_costos'
  });
};
