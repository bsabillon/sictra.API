/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reporte_cotizaciones_det', {
    idrep_user: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    idcotizacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tipo_registro: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cotizacion_referencia: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    cotizacion_idcliente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cotizacion_cliente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cotizacion_cliente_direccion: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    cotizacion_cliente_telefono: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    cotizacion_cliente_correo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cotizacion_cliente_contacto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cotizacion_fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cotizacion_vencimiento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cotizacion_fecha_entrega: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cotizacion_diastransito: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cotizacion_semana: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cotizacion_dia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cotizacion_idperfil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cotizacion_perfil: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cotizacion_idasesor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cotizacion_asesor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cotizacion_idusuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cotizacion_usuario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cotizacion_idestado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cotizacion_idincoterms: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cotizacion_incoterms: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    idlinea: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_idcotizacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_idcontenedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cotizacion_contenedor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cot_referencia: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    cot_idpuerto_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_puerto_origen: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cot_idubicacion_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_puerto_ubicacion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cot_idproveedor_fabrica_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_proveedor_fabrica_origen: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cot_idproveedor_transporte_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_proveedor_transporte_origen: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cot_idproveedor_redestino_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_proveedor_redestino_origen: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cot_idagente_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_agente_origen: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cot_idproveedor_maritimo_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_proveedor_maritimo_origen: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cot_idproveedor_aereo_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_proveedor_aereo_origen: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cot_idproveedor_seguro_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_proveedor_seguro_origen: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cot_idaduana_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_aduana_origen: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cot_idpuerto_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_puerto_destino: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cot_idubicacion_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_ubicacion_destino: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cot_idproveedor_fabrica_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_proveedor_fabrica_destino: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cot_idproveedor_transporte_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_proveedor_transporte_destino: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cot_idproveedor_redestino_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_proveedor_redestino_destino: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cot_idagente_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_agente_destino: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cot_idproveedor_maritimo_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_proveedor_maritimo_destino: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cot_idproveedor_aereo_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_proveedor_aereo_destino: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cot_idproveedor_seguro_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_proveedor_seguro_destino: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cot_idaduana_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_aduana_destino: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cot_idcommodity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_commodity: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cot_cantidad_contenedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_idaduana_almacenfiscal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_aduana_alamacenfiscal: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tar_idlinea: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tar_idcotizacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tar_cotdet_idtarifa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tar_cotdet_fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tar_cotdet_valor: {
      type: "DOUBLE",
      allowNull: true
    },
    tar_cotdet_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tar_cotdet_moneda: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tar_cotdet_valorlocal: {
      type: "DOUBLE",
      allowNull: true
    },
    tar_cotdet_isv: {
      type: "DOUBLE",
      allowNull: true
    },
    tar_cotdet_referencia: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    tar_cotdet_cbm_tarifa: {
      type: "DOUBLE",
      allowNull: true
    },
    tar_cotdet_kg_tarifa: {
      type: "DOUBLE",
      allowNull: true
    },
    cart_idlinea: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cart_idcotizacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cart_cotdet_idtarifa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cart_cotdet_idtarcargo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cart_cart_cotdet_fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cart_cotdet_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cart_cotdet_moneda: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cart_cotdet_valor: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cart_cotdet_referencia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cart_cotdet_rango_tasa: {
      type: "DOUBLE",
      allowNull: true
    },
    cart_cotdet_rango_fijo: {
      type: "DOUBLE",
      allowNull: true
    },
    cart_cotdet_rango_recargo: {
      type: "DOUBLE",
      allowNull: true
    },
    cart_cotdet_plan_tarifa: {
      type: "DOUBLE",
      allowNull: true
    },
    cart_cotdet_plan_tarifaminimo: {
      type: "DOUBLE",
      allowNull: true
    },
    cart_cotdet_plan_recargo: {
      type: "DOUBLE",
      allowNull: true
    },
    camp_idlinea: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    camp_idcotizacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    camp_cotdet_idcampo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    camp_cotdet_campo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    camp_cotdet_tipo: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    camp_cotdet_fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    camp_cotdet_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    camp_cotdet_moneda: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    camp_cotdet_valor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    camp_cotdet_referencia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tot_idlinea: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tot_idcotizacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tot_cotdet_fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tot_cotdet_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tot_cotdet_moneda: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tot_cotdet_referencia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tot_cotdet_total_tarifa_contenedor: {
      type: "DOUBLE",
      allowNull: true
    },
    tot_cotdet_total_cargos_origen: {
      type: "DOUBLE",
      allowNull: true
    },
    tot_cotdet_total_cargos_destino: {
      type: "DOUBLE",
      allowNull: true
    },
    tot_cotdet_total_cargos_extras: {
      type: "DOUBLE",
      allowNull: true
    },
    tot_cotdet_fecha_calculo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tot_cotdet_total_cotizacion: {
      type: "DOUBLE",
      allowNull: true
    },
    cos_idlinea: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cos_idcotizacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cos_cotdet_idsercosto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cos_cotdet_sercosto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cos_cotdet_fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cos_cotdet_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cos_cotdet_moneda: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cos_cotdet_valor: {
      type: "DOUBLE",
      allowNull: true
    },
    cos_cotdet_referencia: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'reporte_cotizaciones_det'
  });
};
