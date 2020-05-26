const express = require('express')
var bodyParser = require('body-parser')
const app = express();
const path = require('path')
const fetch = require('node-fetch')
const axios = require('axios');
const got = require('got')

const port = process.env.PORT || 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('Hello World')
})
app.post('/', function (req, res) {
    res.send('fuck you')
})
app.get('/test', function (req, res) {
    res.sendFile(
        path.join(__dirname, '/hi.html')
    )
})

app.post('/email', function (req, res) {
    console.log(req.body, 'email is here')
    res.status(200);
})

app.post('/location', function (req, res) {
    console.log(req.body, 'email is here')
    res.status(200);
})


app.post('/phone', function (req, res) {
    console.log(req.body, 'phoneNum')
    res.status(200);    
})

app.post('/users', function (req, res) {
    console.log(req.body, 'word')
    res.status(200);
})


app.get('/dashboard', function (req, res) {
    res.sendFile(
        path.join(__dirname, '/dashboard.html') 
    );
})


app.get('/zurag', function (req, res) {
    res.sendFile(
        path.join(__dirname, '/hhe.png')
    );
})

app.post('/medeelelShaard', function (req, res) {

    got.post(`https://api.chatfuel.com/bots/${req.body.chatbodid}/users/${req.body.userid}/send?chatfuel_token=${req.body.token}&chatfuel_block_name=${req.body.blockname}`, { json: true }).then(response => {
        console.log('SUCES', response);
        res.send(response)
    }).catch(error => {
        console.log('ALDAA', error);
        res.send(error)
    });

});

app.listen(port, () => { console.log('server started!') })