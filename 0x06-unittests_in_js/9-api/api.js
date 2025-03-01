const express = require('express');
const app = express();

app.listen(7865, () => {
    console.log("API available on localhost port 7865");
});

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(404);
    }
    else{
        res.send(`Payment methods for cart ${req.params.id}`);
    }
    
});
module.exports = app;