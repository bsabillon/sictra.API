/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotizaciones_dettotales', {
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
    cotdet_fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cotdet_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cotdet_referencia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cotdet_total_tarifa_contenedor: {
      type: "DOUBLE",
      allowNull: true
    },
    cotdet_total_cargos_origen: {
      type: "DOUBLE",
      allowNull: true
    },
    cotdet_total_cargos_destino: {
      type: "DOUBLE",
      allowNull: true
    },
    cotdet_total_cargos_extras: {
      type: "DOUBLE",
      allowNull: true
    },
    cotdet_fecha_calculo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cotdet_total_cotizacion: {
      type: "DOUBLE",
      allowNull: true
    },
    cotdet_total_profit: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'cotizaciones_dettotales'
  });
};
