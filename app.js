const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8069; // change it to environment variable when publishing server
// app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'))
let tasks = []
let work = []

// Date Logic 
var today = new Date()
var options = {weekday:"long",day:"numeric",month:"long",} 
var day = today.toLocaleDateString('en-US',options)
let mode = ''
// Personal Life
app.get('/', (req, res) => {
    res.render('list', {date:day, tasks:tasks, type:''})
    // res.send('<h1>To-Do List</h1>')
})

// Work Life
app.get('/work', (req, res) => {
    res.render('list',{date:`Work Mode | ${day}`,tasks:work,type:'work'})
})

app.post('/', (req, res) => {
    if (req.body.button === "work") {
        work.push(req.body.newTask)
        res.redirect('/work')
    } else {
        tasks.push(req.body.newTask)
        res.redirect('/')
    }
    console.log(req.body.newTask)
})

// About page
app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(process.env.PORT || port, () => { 
    console.log(`Listening on port ${port}`);    
})