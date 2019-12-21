const express = require('express');
const router = express.Router();
const request = require('request');
const Unsplash = require('unsplash-js').default;
const config = require('config');

const unsplash_api_key = config.get('unsplash_api_key');

const unsplash = new Unsplash({
  applicationId: unsplash_api_key,
});

// @route POST searchphoto
// @desc Download pictures URLs
// @access Public

router.post('/', (req, res) => {
  unsplash.search.photos(req.body.data)
    .then(data => data.json())
    .then(data => res.send(data))
})

module.exports = router;