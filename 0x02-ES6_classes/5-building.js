/**
 * Represents a Building.
 */
export default class Building {
  /**
   * Creates a new Building instance.
   * @param {Number} sqft - The square footage of the building.
   */
  constructor(sqft) {
    this._sqft = sqft;
  }

  // Getter for sqft attribute
  get sqft() {
    return this._sqft;
  }

  /**
   * Abstract method that must be implemented by subclasses.
   * Throws an error if called directly from the base class.
   */
  evacuationWarningMessage() {
    // Ensure 'this' is used as expected
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
