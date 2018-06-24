const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(req.headers);
  next();
});

app.use((req, res, next) => {
  req.customName = 'Eli';
  next();
})

app.get('/', (req, res) => {

let name = req.customName;
  res.json({
    Name: name
  })
  // res.send(res);
});

app.listen(3000);

// app.listen(port, (err) => {
//   if (err) {
//     return console.log(`there was an error: ${err}`);
//   }
//   console.log('listening on port: ' + port);
// })
