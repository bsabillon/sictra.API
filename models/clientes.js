/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientes', {
    idcliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cliente_nombre: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    cliente_rtn: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    cliente_identidad: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    cliente_idtipocliente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cliente_telefono: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cliente_fax: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cliente_email: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    cliente_cedular: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cliente_contacto: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    cliente_horario: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    cliente_direccion: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    cliente_direccion_referencia: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    cliente_direccion_ubicacion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cliente_direccion_google: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    cliente_idrubro: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cliente_idgrupocomercial: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cliente_idclase: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cliente_nombrecomercial: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    cliente_idestado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },
    cliente_idzona: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cliente_idruta: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'clientes'
  });
};
