/**
 * Returns a string of set values that start with a specific string.
 * @param {Set} set - The set to filter values from.
 * @param {String} startString - The string to check for at the start of values.
 * @returns {String} A string containing all set values that start with the specified string.
 */
function cleanSet(set, startString) {
    const filteredValues = Array.from(set).filter(value => value.startsWith(startString));
    return filteredValues.join('-');
  }
  
  export default cleanSet;
  