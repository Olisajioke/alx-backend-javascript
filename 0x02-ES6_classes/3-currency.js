/**
 * Represents a Currency.
 */
export default class Currency {
  /**
     * Creates a new Currency instance.
     * @param {String} code - The currency code.
     * @param {String} name - The currency name.
     */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter and setter for code attribute
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // Getter and setter for name attribute
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  /**
     * Returns the currency attributes in the format "name (code)".
     * @returns {String} - The formatted string.
     */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
