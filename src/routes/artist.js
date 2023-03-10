const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artist');

router.get('/', artistController.read);

module.exports = router;

const request = require('supertest');
const app = require('./app');

describe('GET /artists', () => {
  test('returns an array of artists', async () => {
    const response = await request(app).get('/artists');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('artists');
    expect(response.body.artists).toBeInstanceOf(Array);
    expect(response.body.artists.length).toBeGreaterThan(0);
    expect(response.body.artists[0]).toHaveProperty('id');
    expect(response.body.artists[0]).toHaveProperty('name');
  });
});