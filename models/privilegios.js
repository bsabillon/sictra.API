/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('privilegios', {
    idpriv: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    priv_nombre: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    priv_descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    priv_tag: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'privilegios'
  });
};
