const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8069; // change it to environment variable when publishing server


app.listen(port, () => {
    console.log(`Listening on port ${port}`);    
})