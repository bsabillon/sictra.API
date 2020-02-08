/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ubicaciones', {
    idubicacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idmunicipio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ubicacion_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ubicacion_direccion: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ubicacion_contacto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ubicacion_general: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'ubicaciones'
  });
};
