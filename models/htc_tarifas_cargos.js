/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('htc_tarifas_cargos', {
    htcid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    htc_idtarcargo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    htc_costo: {
      type: "DOUBLE",
      allowNull: true
    },
    htc_profit: {
      type: "DOUBLE",
      allowNull: true
    },
    htc_minimo: {
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
    }
  }, {
    tableName: 'htc_tarifas_cargos'
  });
};
