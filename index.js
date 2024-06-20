// require("dotenv").config();

// const express = require("express");

// const cors = require("cors");

// const app = express();

// const session = require('express-session');

// app.use(session({
//     resave: false,
//     saveUninitialized: true,
//     secret: process.env.SESSION_SECRET 
// }));


// app.set('view engine', 'ejs');

// const userRoutes = require('./Routers/userRoute');

// app.use('/',userRoutes);
// // const router = require('./Routers/router')

// // //import connection.js

//  require('./Database/connection')


// app.use(cors());

// app.use(express.json());

// // app.use(router);

// // app.use('/uploads',express.static('./uploads'))

// const PORT = 4000 || process.env;

// app.listen(PORT, () => {
//   console.log(`SERVER RUNNING SUCCESSFULLY AT PORT NUMBER ${PORT}`);
// });

// app.get("/", (req, res) => {
//   res.send(
//     `<h1 style= color:green>project fair  server runing succesfully and ready to accepts requests for client</h1>`
//   );
// });
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require('express-session');
const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2');

const app = express();

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET 
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new OAuth2Strategy({
    authorizationURL: 'https://example.com/oauth2/authorize',
    tokenURL: 'https://example.com/oauth2/token',
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/example/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ exampleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

app.set('view engine', 'ejs');

const userRoutes = require('./Routers/userRoute');
app.use('/', userRoutes);

require('./Database/connection')

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SERVER RUNNING SUCCESSFULLY AT PORT NUMBER ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(
    `<h1 style= color:green>Project fair server running successfully and ready to accept requests for client</h1>`
  );
});
