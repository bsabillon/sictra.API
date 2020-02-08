/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotizaciones_detcostos', {
    idlinea: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcotizacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cotdet_idsercosto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cotdet_fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cotdet_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cotdet_valor: {
      type: "DOUBLE",
      allowNull: true
    },
    cotdet_referencia: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'cotizaciones_detcostos'
  });
};
