/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cxp_tipsub', {
    idcxpsub: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cxpsub_idcxpmov: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    cxpsub_TAG: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: ''
    },
    cxpsub_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    cxpsub_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'cxp_tipsub'
  });
};
