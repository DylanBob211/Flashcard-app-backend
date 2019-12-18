const express = require('express');
const router = express.Router();
const request = require('request');


const YANDEX_TRANSLATE_URL = 'https://translate.yandex.net/api/v1.5/tr.json';
const translateKey = process.env.YANDEX_TRANSLATE_API_KEY || 'trnsl.1.1.20190708T121747Z.01ac6564636ef01e.c1f2621aa834e2ab8d58b26e6d9402ebe9e3aeec';


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