/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rtn', {
    rtn: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cliente: {
      type: DataTypes.STRING(70),
      allowNull: true
    }
  }, {
    tableName: 'rtn'
  });
};
