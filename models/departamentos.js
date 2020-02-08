/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('departamentos', {
    iddepartamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    departamento_name: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    departamento_idgmt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idpais: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'departamentos'
  });
};
