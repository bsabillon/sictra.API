/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empresa', {
    idempresa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    emp_nombre: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    emp_rtn: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    emp_nombre_legal: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    emp_direccion: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    emp_telefono: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    emp_contactos: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    emp_rep_enc: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    emp_rep_pie: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    emp_conf_logo: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    emp_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'empresa'
  });
};
