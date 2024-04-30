const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments and log the result', () => {
    // Arrange
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const consoleLogStub = sinon.stub(console, 'log');

    // Act
    sendPaymentRequestToApi(100, 20);

    // Assert
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleLogStub.calledOnceWithExactly('The total is: 120')).to.be.true;

    // Restore
    calculateNumberSpy.restore();
    consoleLogStub.restore();
  });
});