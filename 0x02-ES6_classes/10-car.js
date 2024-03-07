const classConstructor = Symbol('classConstructor');

/**
 * Represents a Car.
 */
export default class Car {
  /**
   * Creates a new Car instance.
   * @param {String} brand - The brand of the car.
   * @param {String} motor - The motor of the car.
   * @param {String} color - The color of the car.
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    // Store the class constructor using Symbol
    this[classConstructor] = this.constructor;
  }

  // Getter for brand attribute
  get brand() {
    return this._brand;
  }

  // Getter for motor attribute
  get motor() {
    return this._motor;
  }

  // Getter for color attribute
  get color() {
    return this._color;
  }

  /**
   * Clones the car object and returns a new instance.
   * @returns {Car} - The cloned car object.
   */
  cloneCar() {
    return new this[classConstructor](this._brand, this._motor, this._color);
  }
}
