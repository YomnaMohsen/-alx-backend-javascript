export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newname) {
    if (typeof newname !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newname;
  }

  get code() {
    return this._code;
  }

  set code(newcode) {
    if (typeof newcode !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = newcode;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
