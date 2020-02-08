/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cxp_tipsub_campos', {
    campo_idcxpsub: {
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
    tableName: 'cxp_tipsub_campos'
  });
};
