/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('commodity', {
    idcommodity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    commodity_name: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    commodity_idcommoditytipo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    commodity_contenedor_pref: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    commodity_iddoctype: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'commodity'
  });
};
