/**
 * Updates the quantity of items with initial quantity at 1 to 100 in the provided map.
 * @param {Map} map - The map containing groceries and their quantities.
 * @throws {Error} If the argument is not a map.
 */
function updateUniqueItems(map) {
    if (!(map instanceof Map)) {
      throw new Error("Cannot process");
    }
  
    map.forEach((quantity, item) => {
      if (quantity === 1) {
        map.set(item, 100);
      }
    });
  }
  
  export default updateUniqueItems;
  