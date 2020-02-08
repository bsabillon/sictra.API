/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contactos', {
    idcontacto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contacto_nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    contacto_email: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    contacto_telefono: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    contacto_extension: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    contacto_skype: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    contacto_horario: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    contacto_idpuesto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    contacto_idtipo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    contacto_principal: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    contacto_idusuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    contacto_fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'contactos'
  });
};
