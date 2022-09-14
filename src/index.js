const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route = require('./routers/route');
require('dotenv').config();
const app = express

app.use(bodyParser.join())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(process.env.DB, {
    useNewUrlParser: true
})
    .then(() => console.log('MongoDb is connected'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT, () => {
    console.log(`Express app running on port ${process.env.PORT}`)
})