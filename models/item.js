/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item', {
    iditem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    item_nombre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    item_descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    item_frm: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'item'
  });
};
