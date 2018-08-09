var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/:landing_name', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 3000, function() {
  console.log('listening on *:3000');
});