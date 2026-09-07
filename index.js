const express = require('express')
const cors = require('cors')
const path= require('path')

const app = express()
app.use(cors())


app.use(express.json())

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'./index.html'))
})
app.get('/git',(req,res)=>{
  res.sendFile(path.join(__dirname,'./hub.html'))
})
app.get('/altechai',(req, res)=>{
  res.sendFile(path.join(__dirname,'ai.html'))
})
app.get('/wabot',(req,res)=>{
  res.sendFile(path.join(__dirname,'pair.html'))
})

app.listen('3098',()=>{console.log('Working Tool ...')})
