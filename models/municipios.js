/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('municipios', {
    idmunicipio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    municipio_name: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    municipio_idgmt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iddepartamento: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'municipios'
  });
};
