const express = require('express')
const hbs = require('hbs')
const requests = require('requests')
const path = require('path')
const port = process.env.port || 3000

const app = express()


app.use(express.static(path.join(__dirname,'/public')))


app.set('view engine','hbs')
app.set('views',path.join(__dirname,'/templates/views'))
hbs.registerPartials(path.join(__dirname,'/templates/partials'))


////////////////////////////////////////////////////////////////

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/index',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/posts',(req,res)=>{
    res.render('posts')
})
app.get('*',(req,res)=>{
    res.render('404error')
})
////////////////////////////////////////////////////////////////
app.listen(port,()=>{
    console.log('Listening at '+ port)
})