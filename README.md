# JSON Web Tokens Template

You can use this template to kick start an application that uses authentication. This app is the simplest version of the application I could come up with, it takes very little security into account. 

## To run

1. Execute `/config/schema.sql` in MySQL Workbench
2. Edit `/config/config.json` to match your db settings
3. run `npm install`
4. run `node server.js`
5. run `node serverWithDatabase.js`

## Important links:
This is a package for node that has the low level functions: signing and verifying

[NPM link for JWT implementation for Node](https://www.npmjs.com/package/jsonwebtoken)

This is a packge for integrating JWT with express so that req.user gets filled in automatically:

[NPM link for express-jwt](https://www.npmjs.com/package/express-jwt)

Main page for JWT:

[jwt.io, which has some interesting tools](https://jwt.io/)

