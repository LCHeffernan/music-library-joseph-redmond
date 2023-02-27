const db = require('../../src/db/index.js');

async function createArtist(req, res) {
  const { name } = req.body; // assuming the name of the new artist is passed in the request body
  const query = `INSERT INTO Artist (name) VALUES ('${name}')`;
  try {
    const result = await db.query(query);
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}


module.exports = {
  createArtist,
};


// DO NOT GO FORWARD UNLESS YOU HAVE TAKEN NOTES ON THIS 