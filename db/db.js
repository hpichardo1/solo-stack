const { STRING, INTEGER } = require('sequelize')
const Sequelize = require('sequelize')
const db = new Sequelize( process.env.PORT || 'postgres://localhost/solostack', {
  logging: false
})

const User = db.define( 'user', {
  uid: STRING,
  username: STRING
})
const Trip = db.define( 'trip', {
  location: STRING, 
  voteCount: INTEGER
})
User.belongsTo(User, {as: 'friend'})

const syncAndSeed = async () => {
  await db.sync( { force: true } )

  const [ cody, murphy, heinnssin  ] = await Promise.all([
    User.create({ username: 'cody@gmail.com' }),
    User.create({ username: 'murphy@gmail.com'}),
    User.create({ username: 'heinnssinp@gmail.com', uid: 'y68spvyeeqfYh7WeASwnJ5QL7uA3'})
  ])

  Trip.create({ location: 'New York', voteCount: 0 })
}

module.exports = {
  syncAndSeed, 
  models: {
    User, 
    Trip
  }
}