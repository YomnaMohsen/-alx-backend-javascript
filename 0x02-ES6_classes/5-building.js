export default class Building{
    constructor(sqft){
        this._sqft = sqft;
        if(new.target && typeof this.evacuationWarningMessage !== "function"){
            throw new Error("Class extending Building must override evacuationWarningMessage");
        }
    }
    get sqft(){
        return this._sqft;
    }
}
const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
    new TestBuilding(200)
}
catch(err) {
    console.log(err);
}