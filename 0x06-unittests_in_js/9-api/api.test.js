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

   it ('id is number', function(done) {
        request('http://localhost:7865/cart/15', function(error, response, body){
            assert.equal(response.statusCode, 200);
            done();
         });
     });
   it ('id check', function(done) {
        request('http://localhost:7865/cart/15', function(error, response, body){
            assert.equal(body, 'Payment methods for cart 15');
            done();
         });
    });

  it ('id not anumber', function(done) {
        request('http://localhost:7865/cart/well', function(error, response, body){
            assert.equal(response.statusCode, 404);
            done();

         });

    });  
});


