const assert = require("assert");
const calc_num = require('./1-calcul');

describe('calculateNumber', function () {
  describe('Sum', function () {
     it('check result of int',  () => {
        assert.strictEqual(calc_num('SUM',2, 3), 5);
        assert.strictEqual(calc_num('SUM',3, 3), 6);
      });

      it('check if 1 num has decimal >= 0.5',  () => {
        assert.strictEqual(calc_num('SUM',2.5, 3), 6);
        assert.strictEqual(calc_num('SUM',3, 3.6), 7);
        assert.strictEqual(calc_num('SUM',2, -3.5), -1);
      });

      it('check if 2 num has decimal ',  () => {
        assert.strictEqual(calc_num('SUM',2.5, 3.5), 7);
        assert.strictEqual(calc_num('SUM',3.2, 3.6), 7);
        assert.strictEqual(calc_num('SUM',1.1, -3.5), -2);
      });
  });
     
  describe('Subtract', function () {
    it('check if 1 num has decimal >= 0.5', () => {

        assert.strictEqual(calc_num('SUBTRACT',2, 3.5), -2);
        assert.strictEqual(calc_num('SUBTRACT',4, 3.7), 0);
      });

      it('check result of integers', () => {
        assert.strictEqual(calc_num('SUBTRACT',2, 3), -1);
        assert.strictEqual(calc_num('SUBTRACT',3, -3), 6);

      });
      
      it('check if 2 num has decimal >= 0.5', () => {

        assert.strictEqual(calc_num('SUBTRACT',2.5, 3.5), -1);
        assert.strictEqual(calc_num('SUBTRACT',4.5, 3.7), 1);
      });

  });

  describe('Division', function () {
    it('check result of int DIVISION', function () {
        assert.strictEqual(calc_num('DIVIDE',-4, 4), -1);
        assert.strictEqual(calc_num('DIVIDE',-3, -4), 0.75);
    });
      it('check result of type error', function () {

        assert.strictEqual(calc_num('DIVIDE',1, 0), "Error");
        assert.strictEqual(calc_num('DIVIDE',2, 0.4), "Error");
      });

  });
});