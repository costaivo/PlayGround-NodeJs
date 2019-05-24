const path = require('path')

const express = require('express')
const hbs = require('hbs')

const app = express()

//Define path for Express config
const publicDirectory = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'/templates/views')
const partialsPath = path.join(__dirname,'/templates/partials')


// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

// Setup for static directory to serve
app.use(express.static(publicDirectory))

// myWebsite.com
app.get('/',(req,res)=>{
res.render('index',{title:'Weather App 2.0',author:'Ivo Costa'})
})

// myWebsite.com/about
app.get('/about',(req,res)=>{
    res.render('about',{title:'Weather App 2.0',author:'Ivo Costa'})
})

// myWebsite.com/help
app.get('/help',(req,res)=>{
    res.render('help',{title:'Weather App 2.0',author:'Ivo Costa'})
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

