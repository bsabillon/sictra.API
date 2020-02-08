/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contab_cuentas_centros', {
    cc_idcuenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cc_idcentro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cc_total: {
      type: "DOUBLE",
      allowNull: true
    },
    cc_creditos: {
      type: "DOUBLE",
      allowNull: true
    },
    cc_debitos: {
      type: "DOUBLE",
      allowNull: true
    },
    cc_saldo: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'contab_cuentas_centros'
  });
};
