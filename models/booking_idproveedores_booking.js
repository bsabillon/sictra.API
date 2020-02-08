/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('booking_idproveedores_booking', {
    idbooking: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    book_idproveedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    book_HBL: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    tableName: 'booking_idproveedores_booking'
  });
};
