export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
    if (students instanceof Array === false) {
      throw new TypeError('Students must be an array of Strings');
    }
    for (const st in students) {
      if (typeof st !== 'string') {
        throw new TypeError('Students must be an array of Strings');
      }
    }
    this._students = students;
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

  get length() {
    return this._length;
  }

  set length(newlen) {
    if (typeof newlen !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newlen;
  }

  get students() {
    return this._students;
  }

  set students(newstd) {
    if (newstd instanceof Array === false) {
      throw new TypeError('Students must be an array of Strings');
    }
    for (const st in newstd) {
      if (typeof st !== 'string') {
        throw new TypeError('Students must be an array of Strings');
      }
    }
    this._students = newstd;
  }
}
