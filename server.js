const express = require('express');
const cors = require('cors');
global.fetch = require('node-fetch');



const app = express();
const translate = require('./routes/translate');
const searchphoto = require('./routes/searchphoto');

app.use(express.json());
app.use(cors());

// Use Routes 
app.use('/translate', translate);
app.use('/searchphoto', searchphoto);

const port = process.env.PORT || 5000;
app.listen(port, () => { console.log(`listening on port ${port}`); });
