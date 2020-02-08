/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('embalaje_serviciocarga', {
    emb_idcontenedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    emb_idserviciocarga: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'embalaje_serviciocarga'
  });
};
