/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bancos_cuentas', {
    idbancuenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cuenta_numero: {
      type: DataTypes.STRING(25),
      allowNull: true,
      defaultValue: ''
    },
    cuenta_idbanco: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cuenta_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    cuenta_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cuenta_saldo: {
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
    cuenta_reservado: {
      type: "DOUBLE",
      allowNull: true
    },
    cuenta_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'bancos_cuentas'
  });
};
