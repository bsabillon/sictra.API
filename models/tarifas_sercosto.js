/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarifas_sercosto', {
    idtser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tser_idtarifa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tser_idtarfecha: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tser_idcontenedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tser_idincoterms: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tser_idsercosto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tser_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tser_referencia: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tser_valor: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'tarifas_sercosto'
  });
};
