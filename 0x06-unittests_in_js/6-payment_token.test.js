const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');


describe('getPaymentTokenFromAPI', function(){
 
    it ('promise always true', () => {
        return getPaymentTokenFromAPI(true).then((response) => {
        assert.deepEqual(response, {data: 'Successfulresponse from the API'} );
        });  
    });
});

