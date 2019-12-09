require('dotenv').config();
const express = require('express');
const cors = require('cors');
const request = require('request');
const Unsplash = require('unsplash-js').default;

global.fetch = require('node-fetch');

const unsplash = new Unsplash({
  applicationId: process.env.UNSPLASH_API_KEY,
});


const app = express();

const YANDEX_TRANSLATE_URL = 'https://translate.yandex.net/api/v1.5/tr.json';
const translateKey = process.env.YANDEX_TRANSLATE_API_KEY;

app.use(express.json());
app.use(cors());

app.post('/translate', (req, res) => {
  const options = {
    method: 'POST',
    url: `${YANDEX_TRANSLATE_URL}/translate`,
    qs: {
      key: translateKey,
      lang: req.body.lang,
    },
    headers: {
      'cache-control': 'no-cache',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    form: {
      text: req.body.word,
      undefined,
    },
  };

  request(options, (error, response, body) => {
    if (error) res.status(400).send(error);
    res.send(body);
  });
});

app.post('/searchphoto', (req, res) => {
  unsplash.search.photos(req.body.data)
    .then(data => data.json())
    .then(data => res.send(data))
})

const port = process.env.PORT || 5000;
app.listen(port, () => { console.log(`listening on port ${port}`); });
