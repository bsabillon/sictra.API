/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ordenes', {
    idorden: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    orden_descripcion: {
      type: DataTypes.STRING(250),
      allowNull: true,
      defaultValue: ''
    },
    orden_observaciones: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ''
    },
    orden_comentarios: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ''
    },
    orden_idestado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    orden_idproveedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    orden_idcontrol: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    orden_idcotizacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    orden_idlinea: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    orden_idship: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    orden_idcliente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    orden_idusuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    orden_fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    orden_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    orden_subtotal: {
      type: "DOUBLE",
      allowNull: true
    },
    orden_isv: {
      type: "DOUBLE",
      allowNull: true
    },
    orden_total: {
      type: "DOUBLE",
      allowNull: true
    },
    orden_fecha_final: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'ordenes'
  });
};
