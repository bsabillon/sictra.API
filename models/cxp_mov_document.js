/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cxp_mov_document', {
    idmov: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mov_iddocumento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mov_fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mov_referencia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mov_archivo: {
      type: DataTypes.STRING(240),
      allowNull: true,
      defaultValue: ''
    }
  }, {
    tableName: 'cxp_mov_document'
  });
};
