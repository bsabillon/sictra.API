/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('metas', {
    idmeta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    meta_referencia: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    meta_fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    meta_fecha_final: {
      type: DataTypes.DATE,
      allowNull: true
    },
    meta_year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    meta_mes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    meta_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    meta_estado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    tableName: 'metas'
  });
};
