const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8069; // change it to environment variable when publishing server
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
    var today = new Date()
    if (today.getDay()===6 || today.getDay()===0) { 
        res.send(`Today seems to be a holiday, You should be chilling`)
    } else {
        res.sendFile(__dirname + '/index.html')
    }

    // res.send('<h1>To-Do List</h1>')
})

app.listen(process.env.PORT || port, () => {
    console.log(`Listening on port ${port}`);    
})