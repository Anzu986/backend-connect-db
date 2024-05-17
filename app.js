const express = require ('express');
 const path = require('path')
const bodyParser = require ('body-parser');
const usersRouter = require('./routers/users');
const gameRouter = require('./routers/games');
const categoriesRouter = require('./routers/categories');
const {cors} = require('./middlewares/cors');

const connectToDatabase = require('./database/connect');


  
 const PORT = 3000;

  const app = express ();

  connectToDatabase();

  app.use ( 
    cors, 
    bodyParser.json (),
    express.static(path.join(__dirname,"public")),
    usersRouter,
    gameRouter,
    categoriesRouter
  );

  app.listen(PORT, () =>{
    console.log (`Server is running at PORT http://localhost:${PORT}`)
  })