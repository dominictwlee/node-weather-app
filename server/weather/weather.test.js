const request = require('supertest');
const expect = require('expect');

const app = require('../index.js');

describe('GET /api/weather', () => {
  it('should fetch weather and address info', done => {
    request(app)
      .get('/api/weather')
      .query({ address: 'Birmingham' })
      .expect(200)
      .expect(res => {
        expect(res.body).toHaveProperty('address');
        expect(res.body).toHaveProperty('weather');
        expect(res.body.address.formatted).toBe('Birmingham, UK');
        expect(typeof res.body.weather.currently.temperature).toBe('number');
      })
      .end(done);
  });

  it('should return 400 if address is invalid', done => {
    request(app)
      .get('/api/weather')
      .query({ address: 'iofgjwjegpregewgr' })
      .expect(400)
      .end(done);
  });
});
