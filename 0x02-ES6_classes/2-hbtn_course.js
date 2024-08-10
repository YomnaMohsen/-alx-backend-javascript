export default class HolbertonCourse{
    constructor(name, length, students){
        if (typeof name !== "string"){
            throw new TypeError("Name must be a string");
        }
        this._name = name;
        if (typeof length !== "number"){
            throw new TypeError("Length must be a number");
        }
        this._length = length;
        if(students instanceof Array === false){
            throw new TypeError("Students must be an array of Strings");
        }
        for (const st in students){
            if(typeof st !== "string"){
                throw new TypeError("Students must be an array of Strings");
            }  
        }
        this._students = students;
    }

    get name()
    {
        return this._name;
    }
    set name(new_name)
    {   
        if (typeof new_name !== "string"){
            throw new TypeError("Name must be a string");
        }
        this._name = new_name;
    }
    get length()
    {
        return this._length;
    }
    set length(new_len)
    {   
        if (typeof new_len !== "number"){
            throw new TypeError("Length must be a number");
        }
        this._length = new_len;
    }
    get students()
    {
        return this._students;
    }
    set students(new_std)
    {   
        if(new_std instanceof Array === false){
            throw new TypeError("Students must be an array of Strings");
        }
        for (const st in new_std){
            if(typeof st !== "string"){
                throw new TypeError("Students must be an array of Strings");
            }  
        }
        this._students= new_std;
    }

}
const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);

try {
    c1.name = 12;
} 
catch(err) {
    console.log(err);
}

try {
    const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
}
catch(err) {
    console.log(err);
}
