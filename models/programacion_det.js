/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('programacion_det', {
    progdet_idasesor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    progdet_idprog: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    progdet_idcliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    progdet_idevento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    progdet_comentarios: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    progdet_recomendacion: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    progdet_notas: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    progdet_fecha: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'programacion_det'
  });
};
