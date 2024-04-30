const request = require('request');
const { expect } = require('chai');

describe('Available payments endpoint', () => {
  let server;

  before((done) => {
    server = require('./api.js');
    done();
  });

  after((done) => {
    server.close(done);
  });

  it('should return correct payment methods', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });
});

describe('Login endpoint', () => {
  let server;

  before((done) => {
    server = require('./api.js');
    done();
  });

  after((done) => {
    server.close(done);
  });

  it('should return correct welcome message', (done) => {
    const requestData = {
      userName: 'Betty'
    };
    request.post({
      url: 'http://localhost:7865/login',
      body: requestData,
      json: true
    }, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});