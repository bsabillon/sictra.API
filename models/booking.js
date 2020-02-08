/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('booking', {
    idbooking: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    book_idship: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    book_idcotizacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },
    book_referencia: {
      type: DataTypes.STRING(160),
      allowNull: true,
      defaultValue: ''
    },
    book_fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    book_idusuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    book_idlinea: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    book_idcontenedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    book_numcontenedor: {
      type: DataTypes.STRING(40),
      allowNull: true,
      defaultValue: ''
    },
    book_idcontrol: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    book_booking: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: ''
    },
    book_fecha_ETA: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    book_fecha_ETD: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    book_MBL: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: ''
    },
    book_idproveedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    book_idvapor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    book_noorden: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: '0'
    },
    book_HBL: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    tableName: 'booking'
  });
};
