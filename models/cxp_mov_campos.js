/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cxp_mov_campos', {
    idmov: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mov_idcampo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mov_tipo: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    mov_fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mov_valor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    mov_referencia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mov_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'cxp_mov_campos'
  });
};
