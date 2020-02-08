/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contenedor_tarifas_gestiones', {
    cont_idcontenedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cont_idcampo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'contenedor_tarifas_gestiones'
  });
};
