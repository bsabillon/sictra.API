/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ssl_campos_lista', {
    idlista: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    lista_idcampo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lista_nombre: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    lista_observa: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    lista_observa_key: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    tableName: 'ssl_campos_lista'
  });
};
