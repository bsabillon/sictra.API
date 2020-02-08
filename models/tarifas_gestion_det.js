/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarifas_gestion_det', {
    idlinea: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gdet_idgestion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gdet_idagente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gdet_idcontenedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gdet_idproveedor_coloader: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gdet_fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gdet_fecha_fin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gdet_idestado: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'tarifas_gestion_det'
  });
};
