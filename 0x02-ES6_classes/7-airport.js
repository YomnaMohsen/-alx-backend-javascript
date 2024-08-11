export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(newname) {
    this._name = newname;
  }

  get code() {
    return this._code;
  }

  set code(newcode) {
    this._code = newcode;
  }

  toString() {
    return `[object ${this.code}]`;
  }
}
