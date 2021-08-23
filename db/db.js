const Sequelize = require('sequelize')
const db = new Sequelize( process.env.PORT || 'postgres://localhost/finalproject', {
  logging: false
})

const syncAndSeed = async () => {
  await db.sync( { force: true } )


}

module.exports = {
  syncAndSeed, 
}