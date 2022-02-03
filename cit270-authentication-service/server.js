const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const bodyParser = require('body-parser');
const https = require('https')
const app = express()
const fs = require('fs')
const md5 = require('md5');
const port = 3000;
// const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello Browser");
});

//...
try{
https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app).listen(3000, () => {
  console.log('Listening...')
})} catch(error){
    console.log(error)
}



app.post('/login', (req, res) =>{
    console.log(JSON.stringify(req.body));
    if(req.body.userName == "dillanrawlings" && md5(req.body.password)== "10f2c9c97d658a44e423dc3528ffdb05"){
        res.send("Welcome!")
    }else{
        res.send("Who are you?");
    }
});

// app.listen(port, ()=>{});