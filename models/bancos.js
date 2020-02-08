/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bancos', {
    idbanco: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    banco_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    banco_referencia: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    banco_direccion: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    banco_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'bancos'
  });
};
