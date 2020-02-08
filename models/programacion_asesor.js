/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('programacion_asesor', {
    pasesor_idprog: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pasesor_idasesor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'programacion_asesor'
  });
};
