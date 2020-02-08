/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('puertos', {
    idpuerto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    puerto_name: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    puerto_observa: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    puerto_tipo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    puerto_idmunicipio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    puerto_iddoctype: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'puertos'
  });
};
