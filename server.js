const express = require('express');
const path = require('path');
const port = process.env.port || 8080;
const app = express();

app.use(express.static(__dirname, + 'public'))
app.use(express.static(__dirname + '/dist'))
let root = path.resolve(__dirname, 'dist', 'index.html')

app.get('*', function (request, response){
  response.sendFile(root)
})

app.use(express.static('/'))
app.listen(port);
console.log('Server started')