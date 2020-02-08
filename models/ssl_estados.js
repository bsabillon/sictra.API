/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ssl_estados', {
    idestado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    est_siglas: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    est_nombre: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    est_condiciones: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    est_idtag: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    est_color: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    est_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'ssl_estados'
  });
};
