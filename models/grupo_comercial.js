/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupo_comercial', {
    idgrupocomercial: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    grupocomercial_nombre: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    grupocomercial_RTN: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    grupocomercial_direccion: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    grupocomercial_direccion_referencia: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    grupocomercial_idpais: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'grupo_comercial'
  });
};
