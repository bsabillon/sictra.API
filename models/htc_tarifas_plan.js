/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('htc_tarifas_plan', {
    htcid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    htc_idtarifa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    htc_cbm_minimo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    htc_cbm_maximo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    htc_cbm_costo: {
      type: "DOUBLE",
      allowNull: true
    },
    htc_cbm_profit: {
      type: "DOUBLE",
      allowNull: true
    },
    htc_cbm_profit_minimo: {
      type: "DOUBLE",
      allowNull: true
    },
    htc_cbm_recargo: {
      type: "DOUBLE",
      allowNull: true
    },
    htc_kg_minimo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    htc_kg_maximo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    htc_kg_costo: {
      type: "DOUBLE",
      allowNull: true
    },
    htc_kg_profit: {
      type: "DOUBLE",
      allowNull: true
    },
    htc_kg_profit_minimo: {
      type: "DOUBLE",
      allowNull: true
    },
    htc_kg_recargo: {
      type: "DOUBLE",
      allowNull: true
    },
    htc_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    htc_fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    htc_fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    htc_idlinea: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    htc_idcontenedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'htc_tarifas_plan'
  });
};
