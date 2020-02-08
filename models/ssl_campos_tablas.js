/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ssl_campos_tablas', {
    idtabla: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tab_nombre: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    tab_mostrar: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    tab_id: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    tab_display: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'ssl_campos_tablas'
  });
};
