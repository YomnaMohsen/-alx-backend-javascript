export default class Currency{
    constructor(code, name){
        if (typeof code !== "string"){
            throw new TypeError("Code must be a string");
        }
        this._code = code;
        if (typeof name !== "string"){
            throw new TypeError("Name must be a string");
        }
        this._name = name;
    }

    get name()
    {
        return this._name;
    }
    get code(){
        return this.code;
    }
    set name(new_name)
    {   
        if (typeof new_name !== "string"){
            throw new TypeError("Name must be a string");
        }
        this._name = new_name;
    }
    set code(new_code)
    {   
        if (typeof new_code !== "string"){
            throw new TypeError("Code must be a string");
        }
        this._code = new_code;
    }
    displayFullCurrency (params) {
        return `${this.name} (${this.code})`;
    
   } 
}