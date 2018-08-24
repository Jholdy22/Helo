require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive')
const app = express();

app.use(bodyParser.json());

const SERVER_PORT = process.env.SERVER_PORT || 3005 

massive(process.env.CONNECTION_STRING).then(function(db) {
    app.set('db', db)
}).catch(err => console.log(err))

app.listen(SERVER_PORT, () => {
    console.log(`Its crackalackin on port: ${SERVER_PORT}`)
})