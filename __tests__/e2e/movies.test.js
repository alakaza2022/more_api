const request = require('supertest');

const externalUrl = process.env.APP_URL || 'http://localhost:3000';

describe('E2E Test', () => {
  it('should get all movies from external URL', async () => {
    const response = await request(externalUrl).get('/movies');

    const movies = response.body;

    expect(response.status).toBe(200);
    expect(Array.isArray(movies)).toBe(true);
    expect(movies.length).toBeGreaterThan(0);
    movies.forEach(movie => {
        expect(movie).toHaveProperty('id');
      });
  });
});
