const express = require('express');
const app = express();
const fs = require('fs');
var Books =""
fs.readFile('Books.json', (err, data) => {
    if (err) throw err;
    Books = JSON.parse(data);
});

app.get('/', (req, res) => {
  res.send('Welcome to the Book Store');  
})

app.get('/api/books', (req, res) => {
    res.send(Books['books'][0]['title']);  
  })


app.listen(3010,() => {
    console.log('Listening on Port 3010');
})