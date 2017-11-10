var express = require('express');
var app = express();

app.get('/hi', function (req, res) {
  res.send('Hello World!');
});

app.listen(1000, function () {
  console.log('Example app listening on port 3000!');
});
