require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

mongoose.set('strictQuery', false);

app.use(bodyParser.json());
/*
const ownerController = require('./controller/ownerController');
app.use('/', ownerController);

const petController = require('./controller/petController');
app.use('/', petController);
*/

mongoose.connect('mongodb://127.0.0.1:27017/cutepets', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
      res.send('Hi! I love taekwando!');
});

app.listen(port, () => {
      console.log(`Server is now running on http://localhost:${port}`);
})