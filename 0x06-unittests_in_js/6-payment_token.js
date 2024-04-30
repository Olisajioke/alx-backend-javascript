function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
      if (success) {
        resolve({ data: 'Successful response from the API' });
      } else {
        // Simulating an unsuccessful response by doing nothing
        resolve();
      }
    });
  }
  
  module.exports = getPaymentTokenFromAPI;  