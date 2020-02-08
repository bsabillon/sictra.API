/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupo_servicios_carga', {
    idgrupocarga: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    grupocarga_nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    grupocarga_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'grupo_servicios_carga'
  });
};
