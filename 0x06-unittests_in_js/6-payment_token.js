function getPaymentTokenFromAPI(success){
    if (success){
        return  Promise.resolve(
            {data: 'Successfulresponse from the API'}
        );
    } 
}

module.exports = getPaymentTokenFromAPI;
