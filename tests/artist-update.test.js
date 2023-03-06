const { expect } = require('chai')
const request = require('supertest')
const db = require('../src/db')
const app = require('../src/app')

describe('Update Artist', () => {
  let artist
  beforeEach(async () => {
    const { rows } = await db.query('INSERT INTO Artists (name, genre) VALUES( $1, $2) RETURNING *', [
      'Tame Impala',
      'rock',
    ])

    artist = rows[0]
  })
})