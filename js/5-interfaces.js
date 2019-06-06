//interfaces:
//often associated with coding with intent and defining what we need for something before creating that something
//you cant instantiate interfaces
//let a: Animal = new Animal(); //doesnt work!
//we impose interfaces on objects or class to dicate how an object should be shaped
var lassie = {
    name: 'Lassie',
    numberOfLegs: 4,
};
//the object must have the properties of the interface ( name and numberOfLegs), no more or less
//methods:
function sayHello(name) {
    var someNum = 1 + 2;
    var otherNum = 1 + 2;
    return name;
}
var Apples = /** @class */ (function () {
    function Apples() {
    }
    Apples.prototype.setTimeOfPurchase = function (d) {
        console.log('Apples purchased on ', d);
    };
    return Apples;
}());
var myApples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));
//# sourceMappingURL=5-interfaces.js.map