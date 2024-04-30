const request = require('request');
const { expect } = require('chai');

describe('Cart page', () => {
  let server;

  before((done) => {
    server = require('./api.js');
    done();
  });

  after((done) => {
    server.close(done);
  });

  it('should return status code 200 when cart id is a number', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result when cart id is a number', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('should return status code 404 when cart id is not a number', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  // Add other tests if needed
});