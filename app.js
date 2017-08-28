const express = ('express');
const path = require('path');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(3000, function(){
  console.log('Cuts you up');
});
