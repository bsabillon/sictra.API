/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contab_tipo', {
    idtipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipo_nombre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tipo_estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'contab_tipo'
  });
};
