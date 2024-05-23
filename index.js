
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const myData={
    username:"amruta misal",
    email:"abc@gmail.com",
    phone:8165141441
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
 res.send("amruta.com")
})

app.get('/login', (req, res)=>{
  res.send("<h1>please login on coffee aur code</h1>")
})

app.get('/jsondata', (req, res)=>{
  res.json(myData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})