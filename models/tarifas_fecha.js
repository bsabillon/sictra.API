/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarifas_fecha', {
    idtarfecha: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idtarifa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarfec_fecha_ref: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tarfec_fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tarfec_fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tarfec_fecha_limite: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tarfec_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'tarifas_fecha'
  });
};
