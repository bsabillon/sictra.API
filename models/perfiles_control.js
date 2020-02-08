/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perfiles_control', {
    idpcontrol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pcontrol_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    pcontrol_referencia: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pcontrol_idserviciocarga: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pcontrol_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    pcontrol_idpuerto_origen: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    pcontrol_idubicacion_origen: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    pcontrol_idproveedor_fabrica_origen: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    pcontrol_idproveedor_transporte_origen: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    pcontrol_idproveedor_redestino_origen: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    pcontrol_idagente_origen: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    pcontrol_idproveedor_maritimo_origen: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    pcontrol_idproveedor_aereo_origen: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    pcontrol_idproveedor_seguro_origen: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    pcontrol_idaduana_origen: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    pcontrol_customidpuerto_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pcontrol_customidubicacion_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pcontrol_customidproveedor_fabrica_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pcontrol_customidproveedor_transporte_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pcontrol_customidproveedor_redestino_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pcontrol_customidagente_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pcontrol_customidproveedor_maritimo_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pcontrol_customidproveedor_aereo_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pcontrol_customidproveedor_seguro_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pcontrol_customidaduana_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pcontrol_idpuerto_destino: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    pcontrol_idubicacion_destino: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    pcontrol_idproveedor_fabrica_destino: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    pcontrol_idproveedor_transporte_destino: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    pcontrol_idproveedor_redestino_destino: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    pcontrol_idagente_destino: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    pcontrol_idproveedor_maritimo_destino: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    pcontrol_idproveedor_aereo_destino: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    pcontrol_idproveedor_seguro_destino: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    pcontrol_idaduana_destino: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    pcontrol_customidpuerto_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pcontrol_customidubicacion_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pcontrol_customidproveedor_fabrica_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pcontrol_customidproveedor_transporte_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pcontrol_customidproveedor_redestino_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pcontrol_customidagente_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pcontrol_customidproveedor_maritimo_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pcontrol_customidproveedor_aereo_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pcontrol_customidproveedor_seguro_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pcontrol_customidaduana_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pcontrol_idaduana_almacenfiscal: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    pcontrol_customidaduana_almacenfiscal: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    pcontrol_idperfil: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'perfiles_control'
  });
};
