/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reporte_tarifas', {
    idrep_user: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    idtarifa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    tarifa_fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tarifa_fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tarifa_idagente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_agente_nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tarifa_idpuerto_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_puerto_origen_nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tarifa_idpuerto_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_puerto_destino_nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tarifa_idcommodity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_commodity_nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tarifa_idserviciocarga: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_serviciocarga_nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tarifa_idcommoditytipo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_commoditytiopo_nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tarifa_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    tarifa_idcontenedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_det_contenedor_nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tarifa_costo_peso14: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_costo_volumen14: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_profit_peso14: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_profit_volumen14: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_profit_minimo_peso14: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_profit_minimo_volumen14: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_costo_peso510: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_costo_volumen510: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_profit_peso510: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_profit_volumen510: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_profit_minimo_peso510: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_profit_minimo_volumen510: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_costo_peso10: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_costo_volumen10: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_profit_peso10: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_profit_volumen10: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_profit_minimo_peso10: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_profit_minimo_volumen10: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_diaschasis: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_diaslibres: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_diasmaximo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_diasminimo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_idincoterms: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_det_incoterms_nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tarifa_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_det_moneda_nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tarifa_idproveedor_flete: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_det_proveedor_flete_nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    idtarcargo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    idlinea: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tplan_idtarifa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tplan_idcontenedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tplan_contenedor_nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tplan_cbm_minimo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tplan_cbm_maximo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tplan_cbm_costo: {
      type: "DOUBLE",
      allowNull: true
    },
    tplan_cbm_profit: {
      type: "DOUBLE",
      allowNull: true
    },
    tplan_cbm_profit_minimo: {
      type: "DOUBLE",
      allowNull: true
    },
    tplan_cbm_recargo: {
      type: "DOUBLE",
      allowNull: true
    },
    tplan_kg_minimo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tplan_kg_maximo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tplan_kg_costo: {
      type: "DOUBLE",
      allowNull: true
    },
    tplan_kg_profit: {
      type: "DOUBLE",
      allowNull: true
    },
    tplan_kg_profit_minimo: {
      type: "DOUBLE",
      allowNull: true
    },
    tplan_kg_recargo: {
      type: "DOUBLE",
      allowNull: true
    },
    tplan_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tplan_moneda_nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tplan_fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tplan_fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'reporte_tarifas'
  });
};
