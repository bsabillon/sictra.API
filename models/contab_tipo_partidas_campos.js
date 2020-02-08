/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contab_tipo_partidas_campos', {
    campo_idtippar: {
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
    tableName: 'contab_tipo_partidas_campos'
  });
};
