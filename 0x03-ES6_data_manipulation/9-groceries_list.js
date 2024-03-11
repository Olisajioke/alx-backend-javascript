/**
 * Returns a map of groceries with their respective quantities.
 * @returns {Map} A map containing groceries and their quantities.
 */
function groceriesList() {
    const groceries = new Map([
      ['Apples', 10],
      ['Tomatoes', 10],
      ['Pasta', 1],
      ['Rice', 1],
      ['Banana', 5]
    ]);
    return groceries;
  }
  
  export default groceriesList;
  