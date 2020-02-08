/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('control_det', {
    idlinea: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcontrol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    con_idcontenedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    con_referencia: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    con_idpuerto_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    con_idubicacion_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    con_idproveedor_fabrica_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    con_idproveedor_transporte_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    con_idproveedor_redestino_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    con_idagente_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    con_idproveedor_maritimo_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    con_idproveedor_aereo_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    con_idproveedor_seguro_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    con_idaduana_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    con_idpuerto_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    con_idubicacion_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    con_idproveedor_fabrica_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    con_idproveedor_transporte_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    con_idproveedor_redestino_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    con_idagente_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    con_idproveedor_maritimo_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    con_idproveedor_aereo_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    con_idproveedor_seguro_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    con_idaduana_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    con_idcommodity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    con_cantidad_contenedor: {
      type: "DOUBLE",
      allowNull: true
    },
    con_idaduana_almacenfiscal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    con_cantidad_cbm: {
      type: "DOUBLE",
      allowNull: true
    },
    con_cantidad_cft: {
      type: "DOUBLE",
      allowNull: true
    },
    con_cantidad_kg: {
      type: "DOUBLE",
      allowNull: true
    },
    con_cantidad_lbs: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'control_det'
  });
};
