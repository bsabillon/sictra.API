/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ban_tipsub', {
    idbansub: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bansub_idbanmov: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    bansub_TAG: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: ''
    },
    bansub_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    bansub_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'ban_tipsub'
  });
};
