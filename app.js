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

// For fetching the date using the date module created
const date = require(__dirname+'/date')

// Personal Life Mode
app.get('/', (req, res) => {
    let day = date.getDate()
    res.render('list', {date:day, tasks:tasks, type:''})
    // res.send('<h1>To-Do List</h1>')
})

// Work Life Mode
app.get('/work', (req, res) => {
    let day = date.getDay()
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