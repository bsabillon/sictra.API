/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gmt', {
    idgmt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gmt_nombrelargo: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    gmt_descrip: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    gmt_nombrecorto: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    gmt_ref: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    tableName: 'gmt'
  });
};
