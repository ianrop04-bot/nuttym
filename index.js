const express = require('express')
const cors = require('cors')
const path= require('path')

const app = express()
app.use(cors())

app.use(express.static('public'))
app.use(express.json())

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'src/index.html'))
})
app.get('/git',(req,res)=>{
  res.sendFile(path.join(__dirname,'src/hub.html'))
})
app.get('/altechai',(req, res)=>{
  res.sendFile(path.join(__dirname,'src/ai.html'))
})
app.get('/wabot',(req,res)=>{
  res.sendFile(path.join(__dirname,'src/pair.html'))
})

app.listen('3098',()=>{console.log('Working Tool ...')})