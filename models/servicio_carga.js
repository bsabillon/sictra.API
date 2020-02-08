/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servicio_carga', {
    idserviciocarga: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    serviciocarga_nombre: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    cutoffcargalun: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoffcargamar: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoffcargamie: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoffcargajue: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoffcargavie: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoffcargasab: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cutoffcargadom: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    serviciocarga_horario: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    serviciocarga_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    serviciocarga_idgrupocarga: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'servicio_carga'
  });
};
