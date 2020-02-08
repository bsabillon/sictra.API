/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('document_type', {
    iddoctype: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctype_name: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    doctype_descrip: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    doctype_tramite: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    doctype_modulo: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    tableName: 'document_type'
  });
};
