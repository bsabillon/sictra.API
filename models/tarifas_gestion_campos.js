/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarifas_gestion_campos', {
    gdet_idgestion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gdet_idlinea: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gdet_idcampo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gdet_referencia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gdet_valor: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    gdet_tipo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    gdet_fecha: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'tarifas_gestion_campos'
  });
};
