const jwt_express   = require('express-jwt');
const express       = require('express');
const app           = express();

const JWT_SECRET_KEY            = require('./config/jwt').JWT_SECRET_KEY


// Some boilerplate to setup our server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//tell express to use JSON WebTokens. JWT-Express will autofill req.user with the user details
app.use(jwt_express({ secret: JWT_SECRET_KEY}).unless({path: ['/token', '/favicon.ico']}));

const PORT = 3003;

app.use(require('./routes/simple-routes'));


app.listen(PORT, function(){
    console.log("Listenning on ", PORT)
})