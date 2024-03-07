/**
 * Represents a Pricing.
 */
export default class Pricing {
  /**
     * Creates a new Pricing instance.
     * @param {Number} amount - The price amount.
     * @param {Currency} currency - The currency object.
     */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter and setter for amount attribute
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  // Getter and setter for currency attribute
  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  /**
     * Returns the price attributes in the format "amount currency_name (currency_code)".
     * @returns {String} - The formatted string.
     */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
     * Static method to convert a price amount using a conversion rate.
     * @param {Number} amount - The price amount to convert.
     * @param {Number} conversionRate - The conversion rate.
     * @returns {Number} - The converted price amount.
     */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
