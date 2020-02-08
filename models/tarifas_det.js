/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarifas_det', {
    idtarifa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tarifa_idcontenedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tarifa_costo_peso14: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_costo_volumen14: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_profit_peso14: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_profit_volumen14: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_profit_minimo_peso14: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_profit_minimo_volumen14: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_costo_peso510: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_costo_volumen510: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_profit_peso510: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_profit_volumen510: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_profit_minimo_peso510: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_profit_minimo_volumen510: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_costo_peso10: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_costo_volumen10: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_profit_peso10: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_profit_volumen10: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_profit_minimo_peso10: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_profit_minimo_volumen10: {
      type: "DOUBLE",
      allowNull: true
    },
    tarifa_diaschasis: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_diaslibres: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_diasmaximo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_diasminimo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_idincoterms: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tarifa_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_idproveedor_flete: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_idtarfecha: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tarifa_imprime_cot: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'tarifas_det'
  });
};
