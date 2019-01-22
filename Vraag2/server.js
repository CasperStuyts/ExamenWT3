var db
const express = require ('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})
app.get('/', (req, res) => {
  var cursor = db.collection('inhaal').find()
})

app.post('/examen', (req, res) => {
  db.collection('inhaal').save(req.body, (err, result) => {
   if (err) return console.log(err)

   console.log('saved to database')
   res.redirect('/')
 })
})

MongoClient.connect('mongodb://gebruiker1:gebruiker1@ds063715.mlab.com:63715/examen', (err, client) => {
  if (err) return console.log(err)
   db = client.db('examen') // whatever your database name is
   app.listen(3000, () => {
     console.log('listening on 3000')
   })
})
