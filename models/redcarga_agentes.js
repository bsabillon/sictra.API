/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('redcarga_agentes', {
    idred: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    red_idagente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'redcarga_agentes'
  });
};
