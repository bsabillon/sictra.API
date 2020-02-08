/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tarifas', {
    idtarifa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tarifa_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    tarifa_fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tarifa_fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tarifa_idagente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_idpuerto_origen: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_idpuerto_destino: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_idcommodity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_idserviciocarga: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_idcommoditytipo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tarifa_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    tarifa_idaduana_almacenfiscal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    tarifa_idcat: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'tarifas'
  });
};
