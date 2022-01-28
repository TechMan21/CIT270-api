const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const bodyParser = require('body-parser');


const port = 3000;

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello Browser");
});

const md5 = require('md5');

app.post('/login', (req, res) =>{
    console.log(JSON.stringify(req.body));
    if(req.body.userName == "dillanrawlings" && md5(req.body.password)== "10f2c9c97d658a44e423dc3528ffdb05"){
        res.send("Welcome!")
    }else{
        res.send("Who are you?");
    }
});

app.listen(port, ()=>{});