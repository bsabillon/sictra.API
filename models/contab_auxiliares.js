/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contab_auxiliares', {
    idaux: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    aux_codigo: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    aux_nombre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    aux_estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'contab_auxiliares'
  });
};
