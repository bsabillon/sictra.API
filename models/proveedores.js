/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proveedores', {
    idproveedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    proveedor_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    proveedor_rtn: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    proveedor_nombrecomercial: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    proveedor_iddoctype: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    proveedor_idtipoproveedor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    proveedor_idpais: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    proveedor_telefono: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    proveedor_fax: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    proveedor_email: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    proveedor_cedular: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    proveedor_contacto: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    proveedor_horario: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    proveedor_direccion: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    proveedor_direccion_referencia: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    proveedor_direccion_ubicacion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    proveedor_direccion_google: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    proveedor_estado: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    proveedor_saldo: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    proveedor_reservado: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    proveedor_creditos: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    },
    proveedor_debitos: {
      type: "DOUBLE",
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'proveedores'
  });
};
