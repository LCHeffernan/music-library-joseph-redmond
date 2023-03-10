const { Pool } = require('pg')
const express = require('express');
const app = express();

const pool = new Pool()

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}`);
});

module.exports = {
  query: (text, params) => pool.query(text, params)
}
