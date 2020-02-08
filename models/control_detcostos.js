/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('control_detcostos', {
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
    condet_idsercosto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
      type: "DOUBLE",
      allowNull: true
    },
    condet_referencia: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'control_detcostos'
  });
};
