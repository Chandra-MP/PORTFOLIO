const express = require('express')
const path = require('path')

const PORT = process.env.PORT

const app = express();


app.use(express.static(path.join(__dirname, '..', '/build')));

app.get('/*', (req, res)=>
{
    res.sendFile(path.join(__dirname, '..','/build', '/index.html'));   
})


app.listen(PORT || 5000, ()=>
{
    console.log('server up and running on port ', (PORT ? PORT : 5000));
})