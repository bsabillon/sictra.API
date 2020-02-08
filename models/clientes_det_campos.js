/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientes_det_campos', {
    det_idcliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    det_idcampo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    det_referencia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    det_valor: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    det_tipo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    det_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    det_fecha: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'clientes_det_campos'
  });
};
