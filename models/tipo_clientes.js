/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipo_clientes', {
    idtipocliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipocliente_nombre: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    tipocliente_referencia: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'tipo_clientes'
  });
};
