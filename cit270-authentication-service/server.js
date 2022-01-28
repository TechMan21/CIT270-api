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

app.post('/login', (req, res) =>{
    console.log(JSON.stringify(req.body));
    if(req.body.userName == "dillanrawlings" && req.body.password== "ThisAPI21!"){
        res.send("Welcome!")
    }else{
        res.send("Who are you?");
    }
});

app.listen(port, ()=>{});