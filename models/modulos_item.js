/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modulos_item', {
    mitem_iditem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mitem_idmodulo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'modulos_item'
  });
};
