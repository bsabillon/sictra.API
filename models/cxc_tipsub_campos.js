/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cxc_tipsub_campos', {
    campo_idcxcsub: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    campo_idcampo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'cxc_tipsub_campos'
  });
};
