/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cxc_tipmov', {
    idcxcmov: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cxcmov_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    cxcmov_TAG: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: ''
    },
    cxcmov_iddoctype: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cxcmov_operacion: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    cxcmov_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'cxc_tipmov'
  });
};
