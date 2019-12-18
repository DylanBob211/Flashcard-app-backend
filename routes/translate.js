const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('config');

const translateKey = config.get('yandex_api_key');
const YANDEX_TRANSLATE_URL = 'https://translate.yandex.net/api/v1.5/tr.json';


// @route POST translate
// @desc Translate word
// @access Public

router.post('/', (req, res) => {
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
    console.log(body);
  });
});

module.exports = router;