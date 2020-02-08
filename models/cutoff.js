/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cutoff', {
    idcutoff: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cutoff_referencia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cutoff_diainicio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cutoff_diafin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cutoff_fechavence: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cutoff_idpuerto_origen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cutoff_idproveedor_carrier: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cutoff_idpuerto_destino: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cutoff_carga_lun: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoff_carga_mar: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoff_carga_mie: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoff_carga_jue: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoff_carga_vie: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoff_carga_sab: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoff_carga_dom: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoff_carga_horario: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    cutoff_doc_lun: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoff_doc_mar: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoff_doc_mie: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoff_doc_jue: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoff_doc_vie: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoff_doc_sab: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoff_doc_dom: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoff_doc_horario: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    cutoff_etd_lun: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoff_etd_mar: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoff_etd_mie: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoff_etd_jue: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoff_etd_vie: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoff_etd_sab: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoff_etd_dom: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoff_etd_horario: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    tableName: 'cutoff'
  });
};
