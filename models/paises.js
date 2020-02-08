/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paises', {
    idpais: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pais_name: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    pais_idregion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pais_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pais_idgmt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pais_estado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    tableName: 'paises'
  });
};
