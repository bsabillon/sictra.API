const Sequelize = require ('sequelize');
const database = require ('../configuration/database');



  const Aduanas = database.define('aduanas', {
    idaduana: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    aduana_idmunicipio: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    aduana_nombre: {
      type: Sequelize.STRING(150),
      allowNull: true
    },
    aduana_idgmt: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    aduana_horario: {
      type: Sequelize.STRING(120),
      allowNull: true
    },
    aduana_iddoctype: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    aduana_fiscal: {
      type: Sequelize.INTEGER(1),
      allowNull: true
    },
    aduana_tipo: {
      type: Sequelize.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'aduanas'
  });

  module.exports = Aduanas;