/**
 * Represents a Holberton course.
 */
export default class HolbertonCourse {
  /**
   * Creates a new HolbertonCourse instance.
   * @param {String} name - The name of the course.
   * @param {Number} length - The length of the course.
   * @param {String[]} students - An array of students enrolled in the course.
   */
  constructor(name, length, students) {
      this._name = this._validateString(name, "name");
      this._length = this._validateNumber(length, "length");
      this._students = this._validateStudents(students);
  }

  /**
   * Validates if the provided value is a string.
   * @param {*} value - The value to validate.
   * @param {String} attributeName - The name of the attribute being validated.
   * @returns {String} - The validated string.
   * @throws {TypeError} - If the value is not a string.
   */
  _validateString(value, attributeName) {
      if (typeof value !== "string") {
          throw new TypeError(`${attributeName} must be a string`);
      }
      return value;
  }

  /**
   * Validates if the provided value is a number.
   * @param {*} value - The value to validate.
   * @param {String} attributeName - The name of the attribute being validated.
   * @returns {Number} - The validated number.
   * @throws {TypeError} - If the value is not a number.
   */
  _validateNumber(value, attributeName) {
      if (typeof value !== "number" || Number.isNaN(value)) { // Fixed here
          throw new TypeError(`${attributeName} must be a number`);
      }
      return value;
  }

  /**
   * Validates if the provided value is an array of strings.
   * @param {*} value - The value to validate.
   * @returns {String[]} - The validated array of strings.
   * @throws {TypeError} - If the value is not an array of strings.
   */
  _validateStudents(value) {
      if (!Array.isArray(value) || !value.every(item => typeof item === "string")) {
          throw new TypeError("students must be an array of strings");
      }
      return value;
  }

  // Getter and setter for name attribute
  get name() {
      return this._name;
  }

  set name(value) {
      this._name = this._validateString(value, "name");
  }

  // Getter and setter for length attribute
  get length() {
      return this._length;
  }

  set length(value) {
      this._length = this._validateNumber(value, "length");
  }

  // Getter and setter for students attribute
  get students() {
      return this._students;
  }

  set students(value) {
      this._students = this._validateStudents(value);
  }
}
