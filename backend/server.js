const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')
const path = require('path')

const PORT = process.env.PORT

const app = express();


app.use(express.static(path.join(__dirname, '..', '/build')));

app.get('/', (req, res)=>
{
    app.write('Hello World')
    app.sendFile(path.join(__dirname, '..', '/index.html'));   
})


app.listen(PORT || 5000, ()=>
{
    console.log('server up and running on port ', (PORT ? PORT : 5000));
})