require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive')
const app = express();
const controller = require('./controller')
const session = require('express-session');

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

massive(CONNECTION_STRING).then(function(db) {
    app.set('db', db)
}).catch(err => console.log(err))

app.post('/api/register', controller.register)
app.post('/api/login', controller.login)

app.listen(SERVER_PORT, () => {
    console.log(`Its crackalackin on port: ${SERVER_PORT}`)
})