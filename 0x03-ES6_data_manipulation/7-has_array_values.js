/**
 * Checks if all elements in the array exist within the set.
 * @param {Set} set - The set to check against.
 * @param {Array} array - The array of values to check.
 * @returns {boolean} True if all elements in the array exist within the set, otherwise false.
 */
function hasValuesFromArray(set, array) {
    return array.every(value => set.has(value));
  }
  
  export default hasValuesFromArray;
  