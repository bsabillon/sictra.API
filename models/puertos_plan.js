/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('puertos_plan', {
    idlinea: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pplan_idpuerto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pplan_cbm_minimo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pplan_cbm_maximo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pplan_cbm_costo: {
      type: "DOUBLE",
      allowNull: true
    },
    pplan_cbm_profit: {
      type: "DOUBLE",
      allowNull: true
    },
    pplan_cbm_profit_minimo: {
      type: "DOUBLE",
      allowNull: true
    },
    pplan_cbm_recargo: {
      type: "DOUBLE",
      allowNull: true
    },
    pplan_kg_minimo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pplan_kg_maximo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pplan_kg_costo: {
      type: "DOUBLE",
      allowNull: true
    },
    pplan_kg_profit: {
      type: "DOUBLE",
      allowNull: true
    },
    pplan_kg_profit_minimo: {
      type: "DOUBLE",
      allowNull: true
    },
    pplan_kg_recargo: {
      type: "DOUBLE",
      allowNull: true
    },
    pplan_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'puertos_plan'
  });
};
