import Currency from "./3-currency";
export default class Pricing{
    constructor(amount, currency){
        if (typeof amount !== "number"){
            throw new TypeError("Amount must be a string");
        }
        this._amount = amount;
        if (!(currency instanceof Currency)){
            throw new TypeError("currency must be instance of Currency");
        }
            this._currency = currency;
        }
    get amount()
    {
        return this._amount;
    }
    set amount(new_amount)
    {   
        if (typeof new_amount !== "number"){
            throw new TypeError("Amount must be a number");
        }
        this._amount = new_amount;
    }
    get currency()
    {
        return this._currency;
    }
    set currency(new_currency)
    {   
        if (!(currency instanceof Currency)){
            throw new TypeError("currency must be a Currency");
        }
        this._currency = new_currency;
    }
    displayFullPrice(){
        return `${this.amount} ${this.currency.name} (${this.currency.code})`;
    }
    static convertPrice(amount,conversionRate){
        return amount * conversionRate;
    }

}
const p = new Pricing(100, new Currency("EUR", "Euro"))
console.log(p);
console.log(p.displayFullPrice());