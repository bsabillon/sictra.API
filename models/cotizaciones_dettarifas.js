/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotizaciones_dettarifas', {
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
    cotdet_idtarifa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cotdet_fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cotdet_valor: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cotdet_valor_contenedor: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_isv: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_referencia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cotdet_volumen_tarifa: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_peso_tarifa: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_cbm_tarifa: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_kg_tarifa: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_cft_tarifa: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_lbs_tarifa: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_idtarfecha: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cotdet_tarifa_costo_peso: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarifa_costo_volumen: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarifa_profit_minimo_peso: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarifa_profit_minimo_volumen: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tplan_cbm_costo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tplan_cbm_profit_tarifa: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tplan_cbm_profit_minimo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tplan_cbm_recargo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tplan_kg_costo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tplan_kg_profit_tarifa: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tplan_kg_profit_minimo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tplan_kg_recargo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tplan_cft_costo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tplan_cft_profit_tarifa: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tplan_cft_profit_minimo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tplan_cft_recargo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tplan_lbs_costo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tplan_lbs_profit_tarifa: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tplan_lbs_profit_minimo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tplan_lbs_recargo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarifa_profit_volumen: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarifa_profit_peso: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_valor_cbm: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_valor_cft: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_valor_cbm_cft: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_valor_profit: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'cotizaciones_dettarifas'
  });
};
