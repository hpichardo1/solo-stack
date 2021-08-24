const port = process.env.PORT || 3000;
const express = require('express')
const path = require('path')
const app = express()

const { syncAndSeed, models: {User, Trip} } = require('../db/db')

app.use(express.static(path.join(__dirname, '../public')));
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use(express.json());
app.use(express.urlencoded( { extended: true }))


app.get('/api/verifyuser/:id', async (req, res, next)=>{
  const id = req.params.id
  console.log('VERIFY API ID--->', id)
  try {
    const user = await User.findAll({
      where:{
        uid: id
      }
    })
    console.log('VERIFY API USER--->', user)
    
    res.send(user)
  } catch(err){
    console.log(err)
  }
})
app.post('/api/createuser', async(req, res, next)=>{
  const { googleUserId, googleEmail } = req.body
  const uid = googleUserId
  const username = googleEmail
  try {
    await User.create({uid, username})
    res.sendStatus(201)
  } catch(err){
    console.log(err)
  }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

const init = async()=>{
  try {
    await syncAndSeed();
    await app.listen(port, ()=> console.log(`listening on port ${port}`));
  }
  catch (err){
    console.log(err)
  }
}

init();