/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contacto_puestos', {
    idpuesto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    puesto_nombre: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    puesto_prioridad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    puesto_obligatorio: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    puesto_observa: {
      type: DataTypes.STRING(120),
      allowNull: true
    }
  }, {
    tableName: 'contacto_puestos'
  });
};
