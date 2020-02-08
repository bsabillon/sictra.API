/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contab_tipo_partidas', {
    idtippar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tippar_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    tippar_iddoctype: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tippar_estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'contab_tipo_partidas'
  });
};
