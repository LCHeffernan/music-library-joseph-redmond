const express = require('express');
const path = require('path');
const artistRouter = require('./routes/artist');
const app = express();
const port = 3000;

app.use('/artists', artistRouter);

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports = app;