const express = require('express');
const path = require('path');
const artistRouter = require('./routes/artist');
const app = express();
const port = 3001;

app.use(express.json()); // add this line to parse incoming JSON requests

app.use('/artists', artistRouter);

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.get('/artists/:id', async (req, res) => {
  const { id } = req.params;
  const { rows } = await db.query('SELECT * FROM artist WHERE id = $1', [id]);
  const artist = rows[0];
  if (!artist) {
    return res.status(404).json({ error: 'Artist not found' });
  }
  res.status(200).json({ artist });
});

// add the following PUT route to update an artist's information
app.put('/artists/:id', putArtist);

async function putArtist(req, res) {
  const { id } = req.params
  const { name, genre } = req.body

  try {
    const { rows: [ artist ] } = await db.query('UPDATE Artists SET name = $1, genre = $2 WHERE id = $3 RETURNING *', [ name, genre, id ])

    if (!artist) {
      return res.status(404).json({ message: `artist ${id} does not exist` })
    }

    res.status(200).json(artist)
  } catch (err) {
    console.log(err)
    res.status(500).json(err.message)
  }
}

app.delete('/artists/:id', deleteArtist);

async function deleteArtist(req, res) {
  const { id } = req.params;

  try {
    const { rows: [ artist ] } = await db.query('DELETE FROM Artists WHERE id = $1 RETURNING *', [id]);

    if (!artist) {
      return res.status(404).json({ message: `artist ${id} does not exist` });
    }

    res.status(200).json(artist);
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message);
  }
}

module.exports = { app, putArtist };