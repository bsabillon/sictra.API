/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('monedas', {
    idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    moneda_name: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    moneda_factorUSD: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    moneda_simbolo: {
      type: DataTypes.CHAR(4),
      allowNull: true
    }
  }, {
    tableName: 'monedas'
  });
};
