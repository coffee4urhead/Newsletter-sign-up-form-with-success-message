let myName = "Misho";
let mValue = myName.charCodeAt(0);
console.log(myName.charAt(1).padEnd(4, "*"));
/* 
    Text modification methods:
    replace()
    split()
    toLowerCase()
    toUpperCase()
    charCodeAt()
    lastIndexOf()
    indexOf()
    search()
    match()
    matchAll()
    substring()

*/
let arr = ["Mama", "Gamam", "Gay", "Ference"];
let sortedArr = arr.sort((a,b) => a - b);
sortedArr.reverse();
console.table(sortedArr);
let mama = {
    name: "Aneliya",
    age: 40,
    revealInfo: function(){
        console.log(`The object is named  ${this.name} and it is ${this.age} years old`);
    }
}
let tati = {
    name: "Elenko",
    age: 50,
}
mama.revealInfo.call(tati);

class Car {
    constructor(carModel, fuelCapacity){
        this.carModel = carModel;
        this.fuelCapacity = fuelCapacity;
    }
    revealParameters(){
        console.log(`${this.carModel} has a fuel capacity of ${this.fuelCapacity}`);
    }
}
let myCar = new Car("Mazda", 14);
myCar.revealParameters();