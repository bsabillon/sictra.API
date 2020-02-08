/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarifas_commodity', {
    tarcomm_idtarifa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tarcomm_idcontenedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarcomm_idcommodity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'tarifas_commodity'
  });
};
