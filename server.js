const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
global.fetch = require('node-fetch');
const config = require('config');

const app = express();

// routes paths
const translate = require('./routes/translate');
const searchphoto = require('./routes/searchphoto');
const wordList = require('./routes/wordsList');
// DB Config
const db = config.get('mongoURI');

//connect to DB
mongoose
  .connect(db, { 
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true 
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(express.json());
app.use(cors());

// Use Routes 
app.use('/translate', translate);
app.use('/searchphoto', searchphoto);
app.use('/wordlist', wordList);

const port = process.env.PORT || 5000;
app.listen(port, () => { console.log(`listening on port ${port}`); });
