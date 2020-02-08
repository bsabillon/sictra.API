/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contab_cuentas2', {
    idcuenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cuenta_codigo: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    cuenta_nombre: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    cuenta_referencia: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    cuenta_idtipo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cuenta_idcuenta_suma: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cuenta_inicial: {
      type: "DOUBLE",
      allowNull: true
    },
    cuenta_creditos: {
      type: "DOUBLE",
      allowNull: true
    },
    cuenta_debitos: {
      type: "DOUBLE",
      allowNull: true
    },
    cuenta_saldo: {
      type: "DOUBLE",
      allowNull: true
    },
    cuenta_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    cuenta_registro: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    cuenta_balance: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    cuenta_resultado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'contab_cuentas2'
  });
};
