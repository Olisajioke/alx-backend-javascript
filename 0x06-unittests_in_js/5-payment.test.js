const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should log the correct total when totalAmount = 100 and totalShipping = 20', () => {
    // Act
    sendPaymentRequestToApi(100, 20);

    // Assert
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should log the correct total when totalAmount = 10 and totalShipping = 10', () => {
    // Act
    sendPaymentRequestToApi(10, 10);

    // Assert
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});