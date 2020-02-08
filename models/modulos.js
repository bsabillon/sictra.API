/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modulos', {
    idmodulo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    modulo_nombre: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    modulo_descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    modulo_tag: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    tableName: 'modulos'
  });
};
