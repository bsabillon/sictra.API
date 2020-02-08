const Sequelize = require ('sequelize');
const database = require ('../configuration/database');


  const Usuarios = database.define('usuarios', {
    idusuario: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuario_login: {
      type: Sequelize.STRING(25),
      allowNull: true
    },
    usuario_nombre: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    usuario_clave: {
      type: Sequelize.STRING(8),
      allowNull: true
    },
    usuario_estado: {
      type: Sequelize.CHAR(1),
      allowNull: true
    }
  }, {
    tableName: 'usuarios'
  });


module.exports = Usuarios;