/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarifas_gestion', {
    idgestion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gestion_referencia: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    gestion_idpuerto_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gestion_idpuerto_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gestion_fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gestion_fecha_fin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gestion_iddoctype: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gestion_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gestion_total_neto: {
      type: "DOUBLE",
      allowNull: true
    },
    gestion_total_profit: {
      type: "DOUBLE",
      allowNull: true
    },
    gestion_idestado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gestion_idusuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'tarifas_gestion'
  });
};
