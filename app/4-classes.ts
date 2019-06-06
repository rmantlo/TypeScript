//1
class Person {
    //2
    firstName: string;
    lastName: string;
}

//intantiation: creating a new instance of the class
let phil: Person = new Person();

//call class to set values
phil.firstName = "Phil";
phil.lastName = "Donahue";

//methods:
//functions inside the body of a class:
class Person2 {
    firstname: string;
    lastname: string;

    sayHello() {
        console.log('hello', this.firstname);
    }
}
let ken: Person2 = new Person2();
ken.firstname = 'ken';
ken.sayHello();

//constructors:
//allow us to more easily create an instance of a class, instantiates and sets properties of class at same time

class Game {
    constructor(name: string, maker: string) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    gameName: string;
    gameMaker: string;
}
let battleship: Game = new Game('battleship', 'hasbro');

//inheritance:
//parent class:
class Vehicle {
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    runs: boolean;
    topSpeed: number;
}

//child class EXAMPLE ONE
//1
class Automobile extends Vehicle {
    isSelfDriving: boolean;
}

let myCar: Automobile = new Automobile();
myCar.isSelfDriving = false; //2
myCar.topSpeed = 200; //3
myCar.make = "Volvo";

//EXAMPLE TWO       
//1
class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean;
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true; //2
myMotorcycle.topSpeed = 180; //3

//parameter properties:

class Store {
    constructor(name: string, city: string){
        this.name = name;
        this.city = city;
    }
    name: string;
    city: string;
}
let ikea: Store = new Store('Ikea','Fishers');

//use public or private params term to simplify
//private makes the parameters avaliable only for this class and contructor
//public allows the params to be used elsewhere
class Store2 {
    constructor( public name: string, public city: string){}
}
let ikea2 : Store2 = new Store2('Ikea','Fishers')


//Accessors:
//public vs private

class Employee extends Person{
    private _salary: number;

    getSalary(): string{
        return this._salary.toString();
    }

    setSalary(newSalary: number) {
        this._salary = newSalary;
    }
}
let newEmployee: Employee = new Employee();
newEmployee.setSalary(30000);
//newEmployee._salary = 0 //breaks because _salary is private
let salaryResult: string = newEmployee.getSalary();
console.log('the salary is:', salaryResult);

