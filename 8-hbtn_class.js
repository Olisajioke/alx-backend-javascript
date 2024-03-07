/**
 * Represents a HolbertonClass.
 */
export default class HolbertonClass {
    /**
     * Creates a new HolbertonClass instance.
     * @param {Number} size - The size of the class.
     * @param {String} location - The location of the class.
     */
    constructor(size, location) {
      this._size = size;
      this._location = location;
    }
  
    // Getter for size attribute
    get size() {
      return this._size;
    }
  
    // Getter for location attribute
    get location() {
      return this._location;
    }
  
    /**
     * Converts the class to a number, returning the size.
     * @returns {Number} - The size of the class.
     */
    valueOf() {
      return this._size;
    }
  
    /**
     * Converts the class to a string, returning the location.
     * @returns {String} - The location of the class.
     */
    toString() {
      return this._location;
    }
  }
  