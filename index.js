require("dotenv").config();

const express = require("express");

const cors = require("cors");

// const router = require('./Routers/router')

// //import connection.js

 require('./Database/connection')

const mobileserver = express();

mobileserver.use(cors());

mobileserver.use(express.json());

// mobileserver.use(router);

// mobileserver.use('/uploads',express.static('./uploads'))

const PORT = 4000 || process.env;

mobileserver.listen(PORT, () => {
  console.log(`SERVER RUNNING SUCCESSFULLY AT PORT NUMBER ${PORT}`);
});

mobileserver.get("/", (req, res) => {
  res.send(
    `<h1 style= color:green>project fair  server runing succesfully and ready to accepts requests for client</h1>`
  );
});
