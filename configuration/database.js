const Sequelize = require('sequelize');

//const sequelize = new Sequelize('mysql://b928c5f4da3a8a:401b29e4@us-cdbr-iron-east-04.cleardb.net/heroku_bf06c7882fc809e');

const sequelize = new Sequelize('gprometeo_sictra', 'gprometeo_sictra', 'adminsictra', {
  host: '51.68.203.83',
  dialect: 'mysql'
});

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
   })

  module.exports  = sequelize;