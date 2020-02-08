/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contab_cuentas_campos', {
    campo_idcuenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    campo_idcampo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'contab_cuentas_campos'
  });
};
