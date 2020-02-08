/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cxp_tipmov', {
    idcxpmov: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cxpmov_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    cxpmov_TAG: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: ''
    },
    cxpmov_iddoctype: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cxpmov_operacion: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    cxpmov_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'cxp_tipmov'
  });
};
