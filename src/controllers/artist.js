const db = require('../db');

const read = async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM Artist');
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  read,
};