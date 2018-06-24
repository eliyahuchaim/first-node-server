const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('.hbs' ,exphbs({
  defaultLayout: '.main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('home', {
    name: 'John'
  });
});
// const http = require('http');
// const port = 3000;
//
// const requestHandler = (request, response) => {
//   console.log(request.url);
//   response.end("Hello node.js!");
// }
//
// const server = http.createServer(requestHandler);
//
// server.listen(port, (err) => {
//   if (err) {
//     return console.log('there was an error: ', err);
//   }
//   console.log(`listening on port ${port}`);
// });
