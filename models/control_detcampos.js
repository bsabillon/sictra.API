/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('control_detcampos', {
    idlinea: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcontrol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    condet_idcampo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    condet_tipo: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    condet_fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    condet_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    condet_valor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    condet_referencia: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'control_detcampos'
  });
};
