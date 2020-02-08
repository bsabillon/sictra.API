/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupo_comercial_det', {
    idgrupocomercial: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    grupocomercialdet_idcliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    grupocomercialdet_prioridad: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'grupo_comercial_det'
  });
};
