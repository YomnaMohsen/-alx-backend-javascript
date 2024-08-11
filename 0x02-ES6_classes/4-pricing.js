import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a string');
    }
    this._amount = amount;
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be instance of Currency');
    }
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newamount) {
    if (typeof newamount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = newamount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newcurrency) {
    if (!(newcurrency instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = newcurrency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
