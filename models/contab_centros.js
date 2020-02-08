/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contab_centros', {
    idcentro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    centro_codigo: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    centro_idcentro_suma: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    centro_nombre: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    centro_referencia: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    centro_estado: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'contab_centros'
  });
};
