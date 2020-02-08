/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarcargo_idaduana_destino', {
    tar_idtarcargo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tar_idaduana_destino: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'tarcargo_idaduana_destino'
  });
};
