const assert = require('assert');
const request = require('request');


describe('integration test', function(){
 
    it ('200 status code', function(done) {
        request('http://localhost:7865', function(error, response, body){
            assert.equal(response.statusCode, 200);
            done();
         });
     });  
    

    it ('body content', function(done) {
        request('http://localhost:7865', function(error, response, body){
            assert.equal(body, 'Welcome to the payment system');
            done();
         });
    });
    
    it ('404 error', function(done) {
        request('http://localhost:7865/anypoint', function(error, response, body){
            assert.equal(response.statusCode, 404);
            done();

         });         
});
}); 
describe('cart', () => {
  it('should return 200', (done) => {
    request('http://localhost:7865/cart/12', (err, res, body) => {
      assert.equal(res.statusCode, 200);
      done();
    });
  });

  it('should return Payment methods for cart 15', (done) => {
    request('http://localhost:7865/cart/15', (err, res, body) => {
      assert.equal(body, 'Payment methods for cart 15');
      done();
    });
  });

  it('should return 404', (done) => {
    request('http://localhost:7865/cart/hello', (err, res, body) => {
      assert.equal(res.statusCode, 404);
      done();
    });
  });
});


