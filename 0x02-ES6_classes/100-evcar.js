import Car from './10-car';

/**
 * Represents an EVCar, extending the Car class.
 */
export default class EVCar extends Car {
  /**
   * Creates a new EVCar instance.
   * @param {String} brand - The brand of the car.
   * @param {String} motor - The motor of the car.
   * @param {String} color - The color of the car.
   * @param {String} range - The range of the EVCar.
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Getter for range attribute
  get range() {
    return this._range;
  }

  /**
   * Overrides the cloneCar method to return an instance of Car.
   * @returns {Car} - The cloned Car object.
   */
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
