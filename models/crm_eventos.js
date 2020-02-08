/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crm_eventos', {
    idevento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    evento_nombre: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    evento_tipo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    evento_observaciones: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    evento_idgrupoeven: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    evento_favorito: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'crm_eventos'
  });
};
