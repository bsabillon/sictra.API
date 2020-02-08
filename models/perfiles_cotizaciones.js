/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perfiles_cotizaciones', {
    idperfil: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    perfil_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    perfil_referencia: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    perfil_idserviciocarga: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    perfil_estado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    perfil_idpuerto_origen: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idubicacion_origen: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idproveedor_fabrica_origen: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idproveedor_transporte_origen: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idproveedor_redestino_origen: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idagente_origen: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idproveedor_maritimo_origen: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idproveedor_aereo_origen: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idproveedor_seguro_origen: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idaduana_origen: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idpuerto_origen_imp: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idubicacion_origen_imp: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idproveedor_fabrica_origen_imp: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idproveedor_transporte_origen_imp: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idproveedor_redestino_origen_imp: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idagente_origen_imp: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idproveedor_maritimo_origen_imp: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idproveedor_aereo_origen_imp: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idproveedor_seguro_origen_imp: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idaduana_origen_imp: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_customidpuerto_origen: {
      type: DataTypes.STRING(60),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_customidubicacion_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    perfil_customidproveedor_fabrica_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    perfil_customidproveedor_transporte_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    perfil_customidproveedor_redestino_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    perfil_customidagente_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    perfil_customidproveedor_maritimo_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    perfil_customidproveedor_aereo_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    perfil_customidproveedor_seguro_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    perfil_customidaduana_origen: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    perfil_idpuerto_destino: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idubicacion_destino: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idproveedor_fabrica_destino: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idproveedor_transporte_destino: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idproveedor_redestino_destino: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idagente_destino: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idproveedor_maritimo_destino: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idproveedor_aereo_destino: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idproveedor_seguro_destino: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idaduana_destino: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idpuerto_destino_imp: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idubicacion_destino_imp: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idproveedor_fabrica_destino_imp: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idproveedor_transporte_destino_imp: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idproveedor_redestino_destino_imp: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idagente_destino_imp: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idproveedor_maritimo_destino_imp: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idproveedor_aereo_destino_imp: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idproveedor_seguro_destino_imp: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_idaduana_destino_imp: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_customidpuerto_destino: {
      type: DataTypes.STRING(60),
      allowNull: true,
      defaultValue: '0'
    },
    perfil_customidubicacion_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    perfil_customidproveedor_fabrica_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    perfil_customidproveedor_transporte_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    perfil_customidproveedor_redestino_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    perfil_customidagente_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    perfil_customidproveedor_maritimo_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    perfil_customidproveedor_aereo_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    perfil_customidproveedor_seguro_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    perfil_customidaduana_destino: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    perfil_idaduana_almacenfiscal: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    perfil_customidaduana_almacenfiscal: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    tableName: 'perfiles_cotizaciones'
  });
};
