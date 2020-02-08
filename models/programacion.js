/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('programacion', {
    idprog: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    prog_fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    prog_semana: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prog_year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prog_idzona: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prog_idruta: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prog_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    prog_clientes_minimo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prog_clientes_maximo: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'programacion'
  });
};
