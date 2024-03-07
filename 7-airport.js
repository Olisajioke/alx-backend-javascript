/**
 * Represents an Airport.
 */
export default class Airport {
    /**
     * Creates a new Airport instance.
     * @param {String} name - The name of the airport.
     * @param {String} code - The code of the airport.
     */
    constructor(name, code) {
      this._name = name;
      this._code = code;
    }
  
    // Getter for name attribute
    get name() {
      return this._name;
    }
  
    // Getter for code attribute
    get code() {
      return this._code;
    }
  
    /**
     * Returns the airport code as the default string description.
     * @returns {String} - The airport code.
     */
    toString() {
      return this._code;
    }
  }
  