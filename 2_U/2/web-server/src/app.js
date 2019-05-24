const path = require('path')

const express = require('express')

const app = express()

const publicDirectory = path.join(__dirname,'../public')
app.use(express.static(publicDirectory))

// myWebsite.com
app.get('/',(req,res)=>{
res.send('<h1>Hello World</h1>')
})

// myWebsite.com/about
app.get('/about',(req,res)=>{
    res.send('<h1>About Page</h1> <br> <h3>check the weather in your locality</h3>')
})

// myWebsite.com/help
app.get('/help',(req,res)=>{
    res.send({
        name:'ivo costa',
        message:'i am here to help you'
    })
})

// myWebsite.com/weather
app.get('/weather',(req,res)=>{
    res.send({
        location:'goa',
        temperature:27.2
    })
})



app.listen(3000,()=>{
    console.log('Web Server started on port 3000.')
})

