/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarifas_gestion_document', {
    gdoc_idgestion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gdoc_idlinea: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gdoc_iddocumento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gdoc_fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gdoc_archivo: {
      type: DataTypes.STRING(240),
      allowNull: true
    }
  }, {
    tableName: 'tarifas_gestion_document'
  });
};
