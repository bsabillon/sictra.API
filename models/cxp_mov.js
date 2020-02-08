/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cxp_mov', {
    idmov: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mov_idcxpsub: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mov_idproveedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mov_idcontrol: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mov_idcontrol_idlinea: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mov_fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mov_fecha_doc: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    mov_fecha_vence: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    mov_descripcion: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    mov_referencia: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    mov_nodocumento: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    mov_idestado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mov_idusuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mov_idmoneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mov_monto: {
      type: "DOUBLE",
      allowNull: true
    },
    mov_saldo: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'cxp_mov'
  });
};
