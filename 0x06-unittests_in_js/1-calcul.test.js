const assert = require("assert");
const calc_num = require('./1-calcul');
describe('calculateNumber', function () {
      it('check result of SUM',  () => {
        assert.strictEqual(calc_num('SUM',2, 3), 5);
        assert.strictEqual(calc_num('SUM',3, 3), 6);
        assert.strictEqual(calc_num('SUM',2.1, -3.3), -1);
        assert.strictEqual(calc_num('SUM',2.5, 3.3), 6);
      });

      it('check result of SUBTRACT', () => {
        assert.strictEqual(calc_num('SUBTRACT',2, 3), -1);
        assert.strictEqual(calc_num('SUBTRACT',3, -3), 6);
        assert.strictEqual(calc_num('SUBTRACT',2.1, 3.3), -1);
        assert.strictEqual(calc_num('SUBTRACT',2.5, 3.3), 0);
      });

      it('check result of DIVISION', function () {
        assert.strictEqual(calc_num('DIVIDE',-4, 3.6), -1);
        assert.strictEqual(calc_num('DIVIDE',-3.2, -4.3), 0.75);
        assert.strictEqual(calc_num('DIVIDE',1, 0), "Error");
        assert.strictEqual(calc_num('DIVIDE',0, '0'), NaN);
      });
  });