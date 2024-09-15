const Utils = require('./utils.js')
function sendPaymentRequestToApi(totalAmount, totalShipping){
    const sum1 = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${sum1}`);

}

module.exports = sendPaymentRequestToApi;