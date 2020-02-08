/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perfiles_escenarios', {
    idesc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    esc_idperfil: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    esc_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    esc_observaciones: {
      type: DataTypes.STRING(240),
      allowNull: true,
      defaultValue: ''
    },
    esc_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'perfiles_escenarios'
  });
};
