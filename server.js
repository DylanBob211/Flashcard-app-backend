require('dotenv').config();
const express = require('express');
const cors = require('cors');
const request = require('request');
const Unsplash = require('unsplash-js').default;

global.fetch = require('node-fetch');



const app = express();
const translate = require('./routes/translate');
const searchphoto = require('./routes/searchphoto');

const YANDEX_TRANSLATE_URL = 'https://translate.yandex.net/api/v1.5/tr.json';
const translateKey = process.env.YANDEX_TRANSLATE_API_KEY || 'trnsl.1.1.20190708T121747Z.01ac6564636ef01e.c1f2621aa834e2ab8d58b26e6d9402ebe9e3aeec';

app.use(express.json());
app.use(cors());

// Use Routes 
app.use('/translate', translate);
app.use('/searchphoto', searchphoto);
// app.post('/searchphoto', (req, res) => {
//   unsplash.search.photos(req.body.data)
//     .then(data => data.json())
//     .then(data => res.send(data))
// })

const port = process.env.PORT || 5000;
app.listen(port, () => { console.log(`listening on port ${port}`); });
