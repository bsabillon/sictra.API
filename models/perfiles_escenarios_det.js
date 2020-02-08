/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perfiles_escenarios_det', {
    idesc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    esc_idcontenedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esc_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    esc_idincoterms: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esc_idcommodity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esc_idcliente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esc_idpuerto_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esc_idubicacion_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esc_idproveedor_fabrica_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esc_idproveedor_transporte_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esc_idproveedor_redestino_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esc_idagente_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esc_idproveedor_maritimo_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esc_idproveedor_aereo_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esc_idproveedor_seguro_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esc_idaduana_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esc_idpuerto_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esc_idubicacion_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esc_idproveedor_fabrica_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esc_idproveedor_transporte_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esc_idproveedor_redestino_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esc_idagente_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esc_idproveedor_maritimo_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esc_idproveedor_aereo_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esc_idproveedor_seguro_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esc_idaduana_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esc_idaduana_almacenfiscal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esc_cantidad_contenedor: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    esc_cantidad_kg: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    esc_cantidad_lbs: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    esc_cantidad_cft: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    esc_cantidad_cbm: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'perfiles_escenarios_det'
  });
};
