const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with data when success is true', (done) => {
    // Arrange
    const success = true;

    // Act
    getPaymentTokenFromAPI(success)
      .then((response) => {
        // Assert
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done to signal that the test is complete
      })
      .catch((error) => done(error)); // If there's an error, pass it to done
  });

  it('should return a resolved promise with no data when success is false', (done) => {
    // Arrange
    const success = false;

    // Act
    getPaymentTokenFromAPI(success)
      .then((response) => {
        // Assert
        expect(response).to.be.undefined;
        done(); // Call done to signal that the test is complete
      })
      .catch((error) => done(error)); // If there's an error, pass it to done
  });
});