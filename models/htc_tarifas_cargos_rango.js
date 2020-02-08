/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('htc_tarifas_cargos_rango', {
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
    htc_minimo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    htc_maximo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    htc_tasa: {
      type: "DOUBLE",
      allowNull: true
    },
    htc_fijo: {
      type: "DOUBLE",
      allowNull: true
    },
    htc_idcampo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    htc_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    htc_recargo: {
      type: "DOUBLE",
      allowNull: true
    },
    htc_tasaneto: {
      type: "DOUBLE",
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
    }
  }, {
    tableName: 'htc_tarifas_cargos_rango'
  });
};
