/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotizaciones_det', {
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
    cot_idcontenedor: {
      type: DataTypes.INTEGER,
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
    cot_idubicacion_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_idproveedor_fabrica_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_idproveedor_transporte_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_idproveedor_redestino_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_idagente_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_idproveedor_maritimo_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_idproveedor_aereo_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_idproveedor_seguro_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_idaduana_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_idpuerto_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_idubicacion_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_idproveedor_fabrica_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_idproveedor_transporte_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_idproveedor_redestino_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_idagente_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_idproveedor_maritimo_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_idproveedor_aereo_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_idproveedor_seguro_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_idaduana_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_idcommodity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_idaduana_almacenfiscal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cot_cantidad_contenedor: {
      type: "DOUBLE",
      allowNull: true
    },
    cot_cantidad_kg: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cot_cantidad_lbs: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cot_cantidad_cft: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    cot_cantidad_cbm: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'cotizaciones_det'
  });
};
