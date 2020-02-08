/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupo_crm_eventos', {
    idgrupoeven: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    grupoeven_nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    grupoeven_referencia: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    grupoeven_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'grupo_crm_eventos'
  });
};
