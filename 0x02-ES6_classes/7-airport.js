export default class Airport{
    constructor(name, code){
        this._name = name;
        this._code = code;

    }
    get name()
    {
        return this._name;
    }
    set name(new_name){
        this._name = new_name;
    }
    get code()
    {
        return this._code;
    }
    set code(new_code){
        this._code = new_code;
    }
    toString(){
        return `[object ${this.code}]`;
    }
}
