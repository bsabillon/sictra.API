/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarifas_cargoscampos', {
    idtarcargo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tarcampo_idcampo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tarcampo_tipo: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    tarcampo_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcampo_valor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tarcampo_referencia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tarcampo_operador: {
      type: DataTypes.CHAR(2),
      allowNull: true
    }
  }, {
    tableName: 'tarifas_cargoscampos'
  });
};
