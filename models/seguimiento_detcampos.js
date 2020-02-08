/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seguimiento_detcampos', {
    idseg: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    segdet_idcampo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    segdet_tipo: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    segdet_fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    segdet_valor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    segdet_referencia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    segdet_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'seguimiento_detcampos'
  });
};
