const express = require('express');
const app = express();
const APP_PORT = process.env.PORT || 4000;
const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
});