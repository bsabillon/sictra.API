/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perfiles_seguimiento', {
    idperfilseg: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    perseg_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    perseg_referencia: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    perseg_iddoctype: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    perseg_color: {
      type: DataTypes.STRING(25),
      allowNull: true,
      defaultValue: 'Blue'
    },
    perseg_idestado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    perseg_nombre_rpt_ES: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    perseg_nombre_rpt_EN: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    perseg_comentarios: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    perseg_importante: {
      type: DataTypes.STRING(240),
      allowNull: true
    },
    perseg_observaciones: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    perseg_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    perseg_sql: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    perseg_modulo: {
      type: DataTypes.STRING(8),
      allowNull: true
    }
  }, {
    tableName: 'perfiles_seguimiento'
  });
};
