var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
//intantiation: creating a new instance of the class
var phil = new Person();
//call class to set values
phil.firstName = "Phil";
phil.lastName = "Donahue";
//methods:
//functions inside the body of a class:
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Person2.prototype.sayHello = function () {
        console.log('hello', this.firstname);
    };
    return Person2;
}());
var ken = new Person2();
ken.firstname = 'ken';
ken.sayHello();
//constructors:
//allow us to more easily create an instance of a class, instantiates and sets properties of class at same time
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    return Game;
}());
var battleship = new Game('battleship', 'hasbro');
//inheritance:
//parent class:
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
//child class EXAMPLE ONE
//1
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Automobile;
}(Vehicle));
var myCar = new Automobile();
myCar.isSelfDriving = false; //2
myCar.topSpeed = 200; //3
myCar.make = "Volvo";
//EXAMPLE TWO       
//1
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(Vehicle));
var myMotorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true; //2
myMotorcycle.topSpeed = 180; //3
//parameter properties:
var Store = /** @class */ (function () {
    function Store(name, city) {
        this.name = name;
        this.city = city;
    }
    return Store;
}());
var ikea = new Store('Ikea', 'Fishers');
//use public or private params term to simplify
//private makes the parameters avaliable only for this class and contructor
//public allows the params to be used elsewhere
var Store2 = /** @class */ (function () {
    function Store2(name, city) {
        this.name = name;
        this.city = city;
    }
    return Store2;
}());
var ikea2 = new Store2('Ikea', 'Fishers');
//Accessors:
//public vs private
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.getSalary = function () {
        return this._salary.toString();
    };
    Employee.prototype.setSalary = function (newSalary) {
        this._salary = newSalary;
    };
    return Employee;
}(Person));
var newEmployee = new Employee();
newEmployee.setSalary(30000);
//newEmployee._salary = 0 //breaks because _salary is private
var salaryResult = newEmployee.getSalary();
console.log('the salary is:', salaryResult);
//# sourceMappingURL=4-classes.js.map