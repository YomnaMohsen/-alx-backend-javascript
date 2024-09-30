const calc_num = require('./2-calcul_chai');
const {expect}= require('chai');
describe('calculateNumber', function () {
      
      it('check result of SUM',  () => {
        expect(calc_num('SUM',2, 3)).to.equal(5);
        expect(calc_num('SUM',3, 3)).to.equal(6);
        expect(calc_num('SUM',2.1, -3.3)).to.equal(-1);
        expect(calc_num('SUM',2.5, 3.3)).to.equal(6);
      });

      it('check result of SUBTRACT', () => {
        expect(calc_num('SUBTRACT',2, 3)).to.equal(-1);
        expect(calc_num('SUBTRACT',3, -3)).to.equal(6);
        expect(calc_num('SUBTRACT',2.1, 3.3)).to.equal(-1);
        expect(calc_num('SUBTRACT',2.5, 3.3)).to.equal(0);
      });

      it('check result of DIVISION', function () {
        expect(calc_num('DIVIDE',-4, 3.6)).to.equal(-1);
        expect(calc_num('DIVIDE',-3.2, -4.3)).to.equal( 0.75);
        expect(calc_num('DIVIDE',1, 0)).to.equal( "Error");
      });
  });
