function calculateNumber(type, a, b){
    let res;
    switch (type) {
        case 'SUM':
         res = Math.round(a) + Math.round(b);
         break;
        case "SUBTRACT":
         res = Math.round(a) - Math.round(b);
         break;
        case 'DIVIDE':
         res = b === 0 ? "Error": Math.round(a) / Math.round(b);
      }
      return res;
}
module.exports = calculateNumber;
