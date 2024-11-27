const calc_num = require('./2-calcul_chai');
const {expect}= require('chai');
describe('calculateNumber', function () {
   describe('Sum', function () {
    it('check result of int',  () => {
        expect(calc_num('SUM',2, 3)).to.equal(5);
        expect(calc_num('SUM',3, 3)).to.equal(6);
      });

      it('check result of 1 num has dec point >= 0.5',  () => {
        expect(calc_num('SUM',2, -3.5)).to.equal(-1);
        expect(calc_num('SUM',2.5, 3.5)).to.equal(7);
      });

      it('check result of 2 num has dec point >= 0.5',  () => {
        expect(calc_num('SUM',2.6, -3.6)).to.equal(-1);
        expect(calc_num('SUM',0.7, 3.7)).to.equal(5);
      });

   });
      
   describe('Subtract', function () {
     it('check result of int', () => {
        expect(calc_num('SUBTRACT',2, 3)).to.equal(-1);
        expect(calc_num('SUBTRACT',3, -3)).to.equal(6);
        expect(calc_num('SUBTRACT',2.1, 3.3)).to.equal(-1);
        expect(calc_num('SUBTRACT',2.5, 3.3)).to.equal(0);
      });

      it('check result of 1 num had dec point >=0.5', () => {
        expect(calc_num('SUBTRACT',2.5, -3.5)).to.equal(6);
        expect(calc_num('SUBTRACT',0.3, 3.3)).to.equal(-3);
      });

   });
     describe('Divide', function () {
      it('check result of DIVISION', function () {
        expect(calc_num('DIVIDE',-4, 3.6)).to.equal(-1);
        expect(calc_num('DIVIDE',-3, -4.6)).to.equal( 0.6);
        expect(calc_num('DIVIDE',1, 0)).to.equal( "Error");
      });

       it('check result of zero div', function () {
        expect(calc_num('DIVIDE',1, 0)).to.equal( "Error");
        expect(calc_num('DIVIDE',2, 0.4)).to.equal( "Error");
      });
      
     });
      
  });
