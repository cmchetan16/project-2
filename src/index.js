const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route = require('./routers/route');
const app = express()

app.use(bodyParser.json())

mongoose.connect("mongodb+srv://riju:riju@cluster0.s4hmv.mongodb.net/open-to-intern",{
        useNewUrlParser: true
    })
    .then(() => console.log('MongoDb is connected'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function (req, res) {
    console.log("Express app running on port " + (process.env.PORT || 3000));
});