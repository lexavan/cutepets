require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

mongoose.set('strictQuery', false);

app.use(bodyParser.json());

app.get('/', (req, res) => {
      res.send('Hi! I love taekwando!');
});

app.listen(port, () => {
      console.log(`Server is now running on http://localhost:${port}`);
})