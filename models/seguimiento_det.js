/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seguimiento_det', {
    idseg: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    seg_idperfilseg: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    seg_idcontrol: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    seg_idcontrol_idlinea: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    seg_idcotizacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    seg_idcotizacion_idlinea: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    seg_fecha: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    seg_descripcion: {
      type: DataTypes.STRING(240),
      allowNull: true
    },
    seg_comentarios: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    seg_idbooking: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    seg_idbooking_idlinea: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    seg_idship: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    seg_idsercosto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    seg_idtarifa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    seg_idtarcargo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    seg_idorden: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    seg_idorden_idlinea: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'seguimiento_det'
  });
};
