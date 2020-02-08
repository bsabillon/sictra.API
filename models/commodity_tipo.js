/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('commodity_tipo', {
    idcommoditytipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    commoditytipo_name: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    commoditytipo_nivel: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'commodity_tipo'
  });
};
