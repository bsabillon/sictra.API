/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('htc_tarifas', {
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
    htc_idcontenedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    htc_costo_peso14: {
      type: "DOUBLE",
      allowNull: true
    },
    htc_costo_volumen14: {
      type: "DOUBLE",
      allowNull: true
    },
    htc_profit_peso14: {
      type: "DOUBLE",
      allowNull: true
    },
    htc_profit_volumen14: {
      type: "DOUBLE",
      allowNull: true
    },
    htc_costo_peso510: {
      type: "DOUBLE",
      allowNull: true
    },
    htc_costo_volumen510: {
      type: "DOUBLE",
      allowNull: true
    },
    htc_profit_peso510: {
      type: "DOUBLE",
      allowNull: true
    },
    htc_profit_volumen510: {
      type: "DOUBLE",
      allowNull: true
    },
    htc_costo_peso10: {
      type: "DOUBLE",
      allowNull: true
    },
    htc_costo_volumen10: {
      type: "DOUBLE",
      allowNull: true
    },
    htc_profit_peso10: {
      type: "DOUBLE",
      allowNull: true
    },
    htc_profit_volumen10: {
      type: "DOUBLE",
      allowNull: true
    },
    htc_diaschasis: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    htc_diaslibres: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    htc_idincoterms: {
      type: DataTypes.INTEGER,
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
    tableName: 'htc_tarifas'
  });
};
