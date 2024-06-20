require("dotenv").config();

const express = require("express");

const cors = require("cors");

const app = express();

const session = require('express-session');

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET 
}));


app.set('view engine', 'ejs');

const userRoutes = require('./Routers/userRoute');

app.use('/',userRoutes);
// const router = require('./Routers/router')

// //import connection.js

 require('./Database/connection')


app.use(cors());

app.use(express.json());

// app.use(router);

// app.use('/uploads',express.static('./uploads'))

const PORT = 4000 || process.env;

app.listen(PORT, () => {
  console.log(`SERVER RUNNING SUCCESSFULLY AT PORT NUMBER ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(
    `<h1 style= color:green>project fair  server runing succesfully and ready to accepts requests for client</h1>`
  );
});
