/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ssl_campos', {
    idcampo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    campos_nombre: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    campos_referencia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    campos_tipo: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    campos_longitud: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    campos_tag: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    campos_encabezado: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    campos_aplica: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    campos_comparativo: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    campos_tabla: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'ssl_campos'
  });
};
