/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarifas_cargosrango', {
    idlinea: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tran_idtarcargo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tran_minimo: {
      type: "DOUBLE",
      allowNull: true
    },
    tran_maximo: {
      type: "DOUBLE",
      allowNull: true
    },
    tran_tasa: {
      type: "DOUBLE",
      allowNull: true
    },
    tran_fijo: {
      type: "DOUBLE",
      allowNull: true
    },
    tran_idcampo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tran_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tran_recargo: {
      type: "DOUBLE",
      allowNull: true
    },
    tran_tasaneto: {
      type: "DOUBLE",
      allowNull: true
    },
    tran_fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tran_fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'tarifas_cargosrango'
  });
};
