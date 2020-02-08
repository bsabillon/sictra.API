/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarifas_cargos', {
    idtarcargo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    tarcargo_idubicacion_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_idproveedor_fabrica_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_idproveedor_transporte_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_idproveedor_redestino_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_idagente_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_idproveedor_maritimo_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_idproveedor_aereo_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_idproveedor_seguro_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_idaduana_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_idpuerto_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_idubicacion_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_idproveedor_fabrica_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_idproveedor_transporte_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_idproveedor_redestino_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_idagente_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_idproveedor_maritimo_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_idproveedor_aereo_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_idproveedor_seguro_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_idaduana_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_idcommoditytipo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_idcommodity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_idcontenedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_idpais: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_idmoneda: {
      type: DataTypes.INTEGER,
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
    tarcargo_plan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_rango: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_campos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_comentario: {
      type: DataTypes.TEXT,
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
    tarcargo_prefijo: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: 'ABC'
    },
    tarcargo_refformula: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ''
    },
    tarcargo_seguro: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    tarcargo_restringido: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    tarcargo_idcat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcargo_imprime_cot: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '1'
    },
    tarcargo_impvalores: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    tarcargo_impdetalle: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'tarifas_cargos'
  });
};
