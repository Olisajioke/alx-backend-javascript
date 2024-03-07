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
    // You can use 'this' here even if it's not necessary
    throw new Error("Class extending Building must override evacuationWarningMessage");
  }
}

