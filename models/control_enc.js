/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('control_enc', {
    idcontrol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcotizacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    control_referencia: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    control_idcliente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    control_fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    control_vencimiento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    control_fecha_entrega: {
      type: DataTypes.DATE,
      allowNull: true
    },
    control_diastransito: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    control_semana: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    control_dia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    control_idpcontrol: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    control_idasesor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    control_idusuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    control_estado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    control_idincoterms: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'control_enc'
  });
};
