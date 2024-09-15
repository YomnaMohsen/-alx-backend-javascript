const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function(){
    it ('should produce correct output', () =>{
        const consolemsg = sinon.spy(console, "log");
        const newstub = sinon.stub(Utils, "calculateNumber").returns(10);
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledWith(consolemsg, 'The total is: 10');
        sinon.assert.calledWith(newstub, 'SUM', 100, 20);
        consolemsg.restore();
        newstub.restore();
    });

});

