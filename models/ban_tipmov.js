/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ban_tipmov', {
    idbanmov: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    banmov_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    banmov_TAG: {
      type: DataTypes.STRING(3),
      allowNull: true,
      defaultValue: ''
    },
    banmov_iddoctype: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    banmov_operacion: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    banmov_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'ban_tipmov'
  });
};
