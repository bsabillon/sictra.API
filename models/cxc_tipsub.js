/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cxc_tipsub', {
    idcxcsub: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cxcsub_idcxcmov: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    cxcsub_TAG: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: ''
    },
    cxcsub_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    cxcsub_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'cxc_tipsub'
  });
};
