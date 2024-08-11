export default class Car{
    constructor(brand, motor, color){
        this._brand = brand;
        this.motor = motor;
        this.color = color;
    }
    cloneCar(){
        return new this.constructor;
    }
}
