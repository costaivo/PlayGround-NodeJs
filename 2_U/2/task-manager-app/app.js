const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient
const connectionURL ='mongodb://127.0.0.1:27017'
const databaseName ='task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        console.log('Unable to connect to mongodb')
    }
    console.log('Connected to mongoDB successfully ')

   const db = client.db(databaseName)
   db.collection('users').insertOne({
       name:'Ivo',
       age:'38'
   })
})