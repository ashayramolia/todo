const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8069; // change it to environment variable when publishing server
// app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))
let tasks = []

app.get('/', (req, res) => {
    var today = new Date()
    var options = {weekday:"long",day:"numeric",month:"long",} 
    var day = today.toLocaleDateString('en-US',options)
    
    res.render('list', {date:day, tasks:tasks})
    // res.send('<h1>To-Do List</h1>')
})

app.post('/', (req, res) => {
    console.log(req.body.newTask)
    tasks.push(req.body.newTask)
    res.redirect('/')
})

app.listen(process.env.PORT || port, () => { 
    console.log(`Listening on port ${port}`);    
})