/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('redcarga', {
    idred: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    red_nombre: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    red_direccion: {
      type: DataTypes.STRING(250),
      allowNull: true,
      defaultValue: ''
    },
    red_referencia: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    red_correo: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    red_telefono: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    red_website: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'redcarga'
  });
};
