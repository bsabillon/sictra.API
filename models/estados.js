/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estados', {
    idestado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    estado_modulo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    estado_referencia: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    estado_nombre: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    estado_condiciones: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    estado_auto: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    estado_color: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: 'Blue'
    },
    estado_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    estado_TAG: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    estado_nivel: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    estado_idestado_requerido: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    estado_modificar: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    estado_calculo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'estados'
  });
};
