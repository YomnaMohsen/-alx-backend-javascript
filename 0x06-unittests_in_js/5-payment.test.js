const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function(){
    let consolemsg;
    beforeEach(() => {
        consolemsg = sinon.spy(console, "log");
    } ); 
    afterEach(() => {
        consolemsg.restore();
    });
    it ('should produce correct output 120', () =>{
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWith(consolemsg, 'The total is: 120');
        sinon.assert.calledOnce(consolemsg);
        
    });
    it ('should produce correct output 20', () =>{
        sendPaymentRequestToApi(10, 10);
        sinon.assert.calledWith(consolemsg, 'The total is: 20');
        sinon.assert.calledOnce(consolemsg);
    });
});

