/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sol_tarifas', {
    idsoltarifa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    soltarifa_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    soltarifa_fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    soltarifa_vence: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    soltarifa_idagente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soltarifa_idpuerto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soltarifa_idcomodity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soltarifa_idcontenedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soltarifa_idserviciocarga: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soltarifa_costo: {
      type: "DOUBLE",
      allowNull: true
    },
    soltarifa_idcliente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soltarifa_idasesor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soltarifa_minima: {
      type: "DOUBLE",
      allowNull: true
    },
    soltarifa_diaschasis: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    soltarifa_estado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    tableName: 'sol_tarifas'
  });
};
