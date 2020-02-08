/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rubro', {
    idrubro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rubro_nombre: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    rubro_referencia: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'rubro'
  });
};
