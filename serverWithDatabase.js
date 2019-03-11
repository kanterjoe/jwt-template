const jwt_express   = require('express-jwt');
const express       = require('express');
const app           = express();

const JWT_SECRET_KEY            = require('./config/jwt').JWT_SECRET_KEY
const TEST_USER                 = require('./config/jwt').TEST_USER


// Some boilerplate to setup our server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//tell express to use JSON WebTokens. JWT-Express will autofill req.user with the user details
app.use(jwt_express({ secret: JWT_SECRET_KEY}).unless({path: ['/token', '/favicon.ico']}));

const PORT = 3003;

app.use(require('./routes/database-routes'));

const db = require('./models');
db.sequelize.sync({force:true}) 
    .then(function(){
        return db.User.create({
            username: TEST_USER.username,
            password: TEST_USER.password
        })
    })
    .then(function() {
        app.listen(PORT, function(){
            console.log("Listenning on ", PORT)
        })
    })
