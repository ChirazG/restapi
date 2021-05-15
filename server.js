const express = require('express');
const mongoose = require('mongoose');
const app= express();
//2. Install the mongoose and express and  .env
//3. Configure the environment variables with .env
require('dotenv').config();

//connexion database with server (bsh njib ladress)
//const mongoUrl = "process.env.MONGO_URL"
const mongoUrl = "mongodb+srv://chiraz123:chiraz123@cluster0.b0uuk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//parse the data
//ken man7outesh app.use(express.json()) moush 9a3ed yrecuperi fil valeur
app.use(express.json())

app.use('/users', require('./Routes/userRoutes'))

mongoose.connect( mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true }, (err)=>{
    //err? console.log(err) : console.log('database is connected')
    if(err) throw err;
    console.log('database is connected')
})

const port = 5005
app.listen(port,(err)=>{
  if(err) throw err;
    console.log('server is running on port 5005')  
})

//sna3na server w sna3na database w connectinehom bib3athom
//mba3ed etape bsh nasna3 schema w routes