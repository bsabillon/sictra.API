/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agentes', {
    idagente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    agente_nombre: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    agente_direccion: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    agente_referencia: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    agente_correo: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    agente_telefono: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    agente_website: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    agente_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    agente_idred: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    agente_cotizar: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'agentes'
  });
};
