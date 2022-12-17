
const express = require('express');

const db= require('./db');





const app = express();

const exercice1Route =require ('./exercice1/exercice1router')

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
port = 3000,

app.use('/ex1',exercice1Route)

app.listen(port, ()=>{
    console.log(`the server is running on port ${port}`);
})