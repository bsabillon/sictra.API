/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contab_periodos', {
    idperiodo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    periodo_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    periodo_fecha_inicial: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    periodo_fecha_final: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    periodo_year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    periodo_mes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    periodo_idestado: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'contab_periodos'
  });
};
