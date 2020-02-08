/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('documento_tarifa', {
    iddocumento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doc_nombre: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    doc_requisito: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    doc_autoriza: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    doc_copia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    doc_iddoctype: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'documento_tarifa'
  });
};
