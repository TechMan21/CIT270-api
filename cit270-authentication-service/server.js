const express = require('express');
const res = require('express/lib/response');

const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send("Hello Browser");
});

app.listen(port, ()=>{});