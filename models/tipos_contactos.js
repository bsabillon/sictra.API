/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipos_contactos', {
    idtipocontacto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipocontacto_nombre: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    tipocontacto_referencia: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'tipos_contactos'
  });
};
