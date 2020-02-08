/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarifas_categorias', {
    idcat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cat_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    cat_orden: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    cat_restringido: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'tarifas_categorias'
  });
};
