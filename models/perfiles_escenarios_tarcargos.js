/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perfiles_escenarios_tarcargos', {
    pesc_idesc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pesc_idtarcargo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'perfiles_escenarios_tarcargos'
  });
};
