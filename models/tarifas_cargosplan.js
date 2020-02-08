/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarifas_cargosplan', {
    idlinea: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tplan_idtarcargo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tplan_cbm_minimo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tplan_cbm_maximo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tplan_cbm_costo: {
      type: "DOUBLE",
      allowNull: true
    },
    tplan_cbm_profit: {
      type: "DOUBLE",
      allowNull: true
    },
    tplan_cbm_profit_minimo: {
      type: "DOUBLE",
      allowNull: true
    },
    tplan_cbm_recargo: {
      type: "DOUBLE",
      allowNull: true
    },
    tplan_kg_minimo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tplan_kg_maximo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tplan_kg_costo: {
      type: "DOUBLE",
      allowNull: true
    },
    tplan_kg_profit: {
      type: "DOUBLE",
      allowNull: true
    },
    tplan_kg_profit_minimo: {
      type: "DOUBLE",
      allowNull: true
    },
    tplan_kg_recargo: {
      type: "DOUBLE",
      allowNull: true
    },
    tplan_lbs_recargo: {
      type: "DOUBLE",
      allowNull: true
    },
    tplan_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tplan_fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tplan_fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tplan_cft_minimo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tplan_cft_maximo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tplan_cft_costo: {
      type: "DOUBLE",
      allowNull: true
    },
    tplan_cft_profit: {
      type: "DOUBLE",
      allowNull: true
    },
    tplan_cft_profit_minimo: {
      type: "DOUBLE",
      allowNull: true
    },
    tplan_cft_recargo: {
      type: "DOUBLE",
      allowNull: true
    },
    tplan_lbs_minimo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tplan_lbs_maximo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tplan_lbs_costo: {
      type: "DOUBLE",
      allowNull: true
    },
    tplan_lbs_profit: {
      type: "DOUBLE",
      allowNull: true
    },
    tplan_lbs_profit_minimo: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'tarifas_cargosplan'
  });
};
