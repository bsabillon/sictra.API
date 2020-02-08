/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cotizaciones_enc', {
    idcotizacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cotizacion_referencia: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    cotizacion_idcliente: {
      type: DataTypes.INTEGER,
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
    cotizacion_idasesor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cotizacion_idusuario: {
      type: DataTypes.INTEGER,
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
    cotizacion_idesc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cotizacion_idcontacto: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'cotizaciones_enc'
  });
};
