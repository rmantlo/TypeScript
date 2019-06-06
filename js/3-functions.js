function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
addNumbers(1, 2);
//errors:
//addNumbers(1,2,3); //too many variables, only 2 allowed
//addNumbers(1, 'hi') //both must be numbers
/*************
 //return types:
***********/
function sayHello1(name) {
    return name;
}
sayHello1('kenn');
//sayHello(1) //breaks, return type needs to be a string
function test(name, password) {
    if (name === 'elevenfiftyuser' && password === 'Letmein1234!') {
        return true;
    }
    else {
        return false;
    }
}
test('elevenfiftyuser', 'Letmein1234!');
/*****************
 * optionals
 ****************/
//allow for flexibility in parameters
//the ? marks a parameter as optional
//optional params MUST go after all required params
//1                             //2
function addNumbersWithOptional(numOne, numTwo, someString) {
    console.log(someString);
    return numOne + numTwo;
}
//5
addNumbersWithOptional(1, 2); //3
addNumbersWithOptional(1, 2, "This is optional"); //4
function sayMyName(first, last, middle) {
    if (middle) {
        return first + ' ' + middle + ' ' + last;
    }
    else {
        return first + ' ' + last;
    }
}
//# sourceMappingURL=3-functions.js.map