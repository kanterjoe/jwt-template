const router        = require('express').Router()
const jwt           = require('jsonwebtoken');

// this is just a fancy way of making 3 variables. 
const {JWT_OPTIONS, JWT_SECRET_KEY, TEST_USER}            = require('../config/jwt')

//this is an example route that only a signed-in user can access
router.get('/test', function(req, res) {
    //JWT-Express autofills req.user, we can use that to 
    if (!req.user) return res.sendStatus(401);
    console.log("Test route hit by user with ID: " + req.user.id)
    res.json(req.user);
});


router.post('/token', function(req,res) {
    //Normally, you would fetch the user from the database here.
    //then save the relevant info in user details
    const userDetails = {
        username: TEST_USER.username,
        id: TEST_USER.id,
        foo: TEST_USER.foo,
    };


    // do some sort of check that the user/password is correct:
    //normally, you would do this with the user in the database. 
    //in this case, we just have a "test user" saved in a file somewhere
    if (req.body.username === TEST_USER.username && req.body.password === TEST_USER.password) {

        jwt.sign(userDetails, JWT_SECRET_KEY, JWT_OPTIONS, 
        function(err, token) {
            if (err) return res.sendStatus(500).json(err) //do some error checking
            res.json({
                user: userDetails,
                token: token,
            })

        })

    }
});


module.exports = router;