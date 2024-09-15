const assert = require("assert");
const calc_num = require('./0-calcul');
describe('calculateNumber', function () {
      it('check result of int numbers',  () => {
        assert.strictEqual(calc_num(2, 3), 5);
        assert.strictEqual(calc_num(3, 3), 6);
      });

      it('check result of decimal numbers', () => {
        assert.strictEqual(calc_num(2.1, 3.3), 5);
        assert.strictEqual(calc_num(2.4, 3.3), 5);
      });

      it('check result of negative numbers', function () {
        assert.strictEqual(calc_num(-4, -3.6), -8);
        assert.strictEqual(calc_num(-4.2, -3.3), -7);
      });
      it('check result of nan', function () {
        assert.strictEqual(calc_num(0, '0'), 0);
      });
  });