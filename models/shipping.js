/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shipping', {
    idship: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ship_idcotizacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ship_idcontrol: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ship_idlinea: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ship_idcontenedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ship_referencia: {
      type: DataTypes.STRING(160),
      allowNull: true
    },
    ship_fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ship_nota: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    ship_idusuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ship_master_idagente_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ship_master_idagente_origen_idcontacto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ship_master_idagente_consignatario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ship_master_idagente_consignatario_idcontacto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ship_master_from_idubicacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ship_master_pod_idpuerto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ship_master_delivery_idubicacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ship_master_ssline_flete_idproveedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ship_house_idproveedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ship_house_idproveedor_idcontacto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ship_house_idcliente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ship_house_idcliente_idcontacto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ship_house_from_idubicacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ship_house_pod_idpuerto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ship_house_delivery_idubicacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ship_terminos: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ship_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    ship_master_idagente_origen_info: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    ship_master_idagente_consignatario_info: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    ship_house_idproveedor_info: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    ship_house_idcliente_origen_info: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    ship_master_pol_idpuerto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ship_house_pol_idpuerto: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'shipping'
  });
};
