const assert = require('assert');
const request = require('request');


describe('Home test', function(){
 
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
describe('avail pay', function(){
 
    it ('200 status code', function(done) {
        request('http://localhost:7865/available_payments', function(error, response, body){
            assert.equal(response.statusCode, 200);
            done();
         });
     }); 

     it ('return object', function(done) {
        request('http://localhost:7865/available_payments', function(error, response, body){
            assert.deepStrictEqual(JSON.parse(body), { payment_methods: { 
                credit_cards: true, paypal: false }
            });
            done();
         });
     }); 
    });

    describe('login', function(){
 
    it ('200 status code', function(done) {
        request.post('http://localhost:7865/login', {json: { "userName": "Betty" }}, function(error, response, body){
            assert.equal(response.statusCode, 200);
            assert.equal(body,'Welcome Betty');
            done();
         });
     }); 
    });
