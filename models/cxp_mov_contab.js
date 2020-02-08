/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cxp_mov_contab', {
    movcon_idmov: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    movcon_idcuenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    movcon_cuenta_codigo: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    movcon_idcentro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    movcon_centro_codigo: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    movcon_idaux: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    movcon_concepto: {
      type: DataTypes.STRING(250),
      allowNull: true,
      defaultValue: ''
    },
    movcon_credito: {
      type: "DOUBLE",
      allowNull: true
    },
    movcon_debito: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'cxp_mov_contab'
  });
};
