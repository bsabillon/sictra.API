/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seguimiento_detdocument', {
    idseg: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    segdet_iddocumento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    segdet_fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    segdet_referencia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    segdet_archivo: {
      type: DataTypes.STRING(240),
      allowNull: true,
      defaultValue: ''
    }
  }, {
    tableName: 'seguimiento_detdocument'
  });
};
