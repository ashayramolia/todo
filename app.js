const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8069; // change it to environment variable when publishing server
// app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')

app.get('/', (req, res) => {
    var today = new Date()

    res.render('list', {date:today})
    // res.send('<h1>To-Do List</h1>')
})

app.listen(process.env.PORT || port, () => {
    console.log(`Listening on port ${port}`);    
})