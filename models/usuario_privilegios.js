/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario_privilegios', {
    upriv_idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    upriv_idmodulo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    upriv_iditem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    upriv_idpriv: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    upriv_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'usuario_privilegios'
  });
};
