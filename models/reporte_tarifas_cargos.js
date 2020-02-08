/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reporte_tarifas_cargos', {
    idrep_user: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    idtarcargo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    tarcargo_costo: {
      type: "DOUBLE",
      allowNull: true
    },
    tarcargo_profit: {
      type: "DOUBLE",
      allowNull: true
    },
    tarcargo_minimo: {
      type: "DOUBLE",
      allowNull: true
    },
    tarcargo_idpuerto_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_puerto_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcargo_idubicacion_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_ubicacion_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcargo_idproveedor_fabrica_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_proveedor_fabrica_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcargo_idproveedor_transporte_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_proveedor_transporte_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcargo_idproveedor_redestino_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_proveedor_redestino_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcargo_idagente_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_agente_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcargo_idproveedor_maritimo_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_proveedor_maritimo_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcargo_idproveedor_aereo_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_proveedor_aereo_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcargo_idproveedor_seguro_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_proveedor_seguro_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcargo_idaduana_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_aduana_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcargo_idpuerto_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_puerto_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcargo_idubicacion_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_ubicacion_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcargo_idproveedor_fabrica_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_proveedor_fabrica_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcargo_idproveedor_transporte_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_proveedor_transporte_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcargo_idproveedor_redestino_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_proveedor_redestino_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcargo_idagente_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_agente_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcargo_idproveedor_maritimo_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_maritimo_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcargo_idproveedor_aereo_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_proveedor_aereo_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcargo_idproveedor_seguro_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_proveedor_seguro_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcargo_idaduana_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_aduana_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcargo_idcommoditytipo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_commoditytipo: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcargo_idcommodity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_commodity: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcargo_idcontenedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_contenedor: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcargo_idpais: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_pais: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcargo_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_moneda: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcargo_cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_total: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    tarcargo_od: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    tarcargo_base: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    tarcargo_sumabase: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    tarcargo_permitemodificar: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    tarcargo_comentario: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tarcargo_fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tarcargo_fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tarcargo_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    tarcargo_idaduana_almacenfiscal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_aduana_almacenfiscal: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tplan_idlinea: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tplan_idtarcargo: {
      type: DataTypes.INTEGER,
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
    tplan_moneda: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tplan_fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tplan_fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tran_idlinea: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tran_idtarcargo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tran_minimo: {
      type: "DOUBLE",
      allowNull: true
    },
    tran_maximo: {
      type: "DOUBLE",
      allowNull: true
    },
    tran_tasa: {
      type: "DOUBLE",
      allowNull: true
    },
    tran_fijo: {
      type: "DOUBLE",
      allowNull: true
    },
    tran_idcampo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tran_campo: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tran_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tran_moneda: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tran_recargo: {
      type: "DOUBLE",
      allowNull: true
    },
    tran_tasaneto: {
      type: "DOUBLE",
      allowNull: true
    },
    tran_fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tran_fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tarcampo_idtarcargo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcampo_idcampo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcampo_campo: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcampo_tipo: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    tarcampo_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcampo_moneda: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    tarcampo_valor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tarcampo_referencia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tarcampo_operador: {
      type: DataTypes.CHAR(2),
      allowNull: true
    }
  }, {
    tableName: 'reporte_tarifas_cargos'
  });
};
