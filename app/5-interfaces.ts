//interfaces:
//often associated with coding with intent and defining what we need for something before creating that something

interface Animal {
    name: string;
    numberOfLegs: number;
}
//you cant instantiate interfaces
//let a: Animal = new Animal(); //doesnt work!
//we impose interfaces on objects or class to dicate how an object should be shaped
let lassie: Animal = {
    name: 'Lassie',
    numberOfLegs: 4,
    //numberOfPups: 0, //breaks
}
//the object must have the properties of the interface ( name and numberOfLegs), no more or less

//methods:
function sayHello(name:string): string{
    var someNum = 1+2;
    var otherNum = 1+2;
    return name;
}

//interfaces can have methods that are not implemented
//we use them to create method signatures, which the object or class implements
interface Product {
    name:string;
    price:number;
    setTimeOfPurchase(d: Date);
}
class Apples implements Product {
    name: 'Apples';
    price: 5.50;

    setTimeOfPurchase(d: Date){
        console.log('Apples purchased on ', d)
    }
}
let myApples: Apples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));