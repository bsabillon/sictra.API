/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ban_tipsub_campos', {
    campo_idbansub: {
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
    tableName: 'ban_tipsub_campos'
  });
};
