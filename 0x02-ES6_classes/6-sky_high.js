import Building from './5-building';

/**
 * Represents a SkyHighBuilding.
 */
export default class SkyHighBuilding extends Building {
  /**
   * Creates a new SkyHighBuilding instance.
   * @param {Number} sqft - The square footage of the building.
   * @param {Number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // Getter for floors attribute
  get floors() {
    return this._floors;
  }

  /**
   * Overrides the evacuationWarningMessage method to return a customized message.
   * @returns {String} - The evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
