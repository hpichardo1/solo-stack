const port = process.env.PORT || 3000;
const express = require('express')
const path = require('path')
const app = express()

const { syncAndSeed } = require('../db/db')

app.use(express.static(path.join(__dirname, '../public')));
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use(express.json());
app.use(express.urlencoded( { extended: true }))


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