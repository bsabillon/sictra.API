/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estados_referencia', {
    idref: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    idref_idlinea: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    idestado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ref_comentario: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ref_fecha: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    ref_modulo: {
      type: DataTypes.STRING(60),
      allowNull: true,
      defaultValue: ''
    },
    ref_idusuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'estados_referencia'
  });
};
