/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asesores', {
    idasesor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    asesor_nombre: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    asesor_nombrecorto: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    asesor_telefono: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    asesor_email: {
      type: DataTypes.STRING(130),
      allowNull: true
    },
    asesor_idusuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    asesor_observa: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    asesor_skype: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    asesor_foto: {
      type: DataTypes.STRING(256),
      allowNull: true
    }
  }, {
    tableName: 'asesores'
  });
};
