/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotizaciones_dettarifas_cargos', {
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
    cotdet_idtarcargo: {
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
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_referencia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cotdet_rango_tasa: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_rango_fijo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_rango_recargo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_plan_tarifa: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_plan_tarifaminimo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_plan_recargo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_idtarfecha: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cotdet_tarcargo_costo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_profit: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_minimo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_tplan_cbm_costo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_tplan_cbm_profit: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_tplan_cbm_profit_minimo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_tplan_cbm_recargo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_tplan_kg_costo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_tplan_kg_profit: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_tplan_kg_profit_minimo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_tplan_kg_recargo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_tran_tasaneto: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_tran_recargo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_tran_tasa: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_tran_fijo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_tplan_cft_costo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_tplan_cft_profit: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_tplan_cft_profit_minimo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_tplan_cft_recargo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_tplan_lbs_costo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_tplan_lbs_profit: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_tplan_lbs_profit_minimo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_tplan_lbs_recargo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_volumen_tarifa: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_peso_tarifa: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_cbm_tarifa: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_kg_tarifa: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_cft_tarifa: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_tarcargo_lbs_tarifa: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_valor_contenedor_kg: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_valor_cbm_kg: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_valor_cft_lbs: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cotdet_cantidad_contenedor: {
      type: "DOUBLE",
      allowNull: true
    },
    cotdet_cantidad_kg: {
      type: "DOUBLE",
      allowNull: true
    },
    cotdet_cantidad_cbm: {
      type: "DOUBLE",
      allowNull: true
    },
    cotdet_cantidad_cft: {
      type: "DOUBLE",
      allowNull: true
    },
    cotdet_cantidad_lbs: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'cotizaciones_dettarifas_cargos'
  });
};
