const express = require ('express');
 const path = require('path')
const bodyParser = require ('body-parser');
const usersRouter = require('./routers/users');
const gameRouter = require('./routers/games');
const categoriesRouter = require('./routers/categories');
const {cors} = require('./middlewares/cors');

const connectToDatabase = require('./database/connect');
const apiRouter = require('./routers/apiRouter');


  
 const PORT = 3000;

  const app = express ();

  connectToDatabase();

  app.use ( 
    cors, 
    bodyParser.json (),
    apiRouter,
    express.static(path.join(__dirname,"public")),
   
  );

  app.listen(PORT, () =>{
    console.log (`Server is running at PORT http://localhost:${PORT}`)
  })