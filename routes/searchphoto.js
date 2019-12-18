const express = require('express');
const router = express.Router();
const request = require('request');
const Unsplash = require('unsplash-js').default;

const unsplash = new Unsplash({
  applicationId: process.env.UNSPLASH_API_KEY || '66c8f4bbdcd250ba88db15412fb4cf728a9a8c4db261db2a356b22a1365aa20a',
});

router.post('/', (req, res) => {
  unsplash.search.photos(req.body.data)
    .then(data => data.json())
    .then(data => res.send(data))
})

module.exports = router;