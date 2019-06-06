/******************
 * 01 - Declaration
 ******************/
//can declare with or without values, or not declare at all
var password;
var phoneNumber;
var email;
var socialSecurity;
var isMarried;
var username = "instructor";
var passwords = "Letmein1234!";
var instructorId = 5;
var greeting = 'Hello';
/*****************
 * 02 - Basic Types
 *******************/
var age = 40;
var currentYear = 2018;
//also uses es6 octal literals:
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var companyName;
companyName = "Eleven Fifty";
var isLoggedIn = true;
var isGoldLevelUser = true;
//Arrays:
//1
var studentList = ['Tom', 'Tracy', 'Nikaya'];
//2
var allScores = [100, 92, 95, 96];
//any
var dataFromThirdParty = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
//void:
//no type at all, not seen in variables, mainly functions that return no value
function sayHelloToAll() {
    console.log("Hello to all!");
}
//null/undefined:
var undefinedVariable = undefined;
var nullVariable = null;
//Tuple: Array with multiple types
// Declare a tuple type
var usernameAndId;
// Initialize it
usernameAndId = [1, "kennisreally40"]; // OK
//types must be in order or wont work
//Enum
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
var weapon = WeaponType.Sword;
//like arrays, enum index starts at 0, but can be reassigned:
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {})); //CardType[1] = Ace
var cardType = CardType[2];
console.log(cardType);
/****************
 * 03 - Union Types
 ****************/
//Union types allow us to have more flexibility with our variables, but we still keep the intent of declaring a specific type for our variables.
var x;
var y;
x = '1234';
x = 1234;
//x = true; //these throw error because they are boolean, not number, string or null
//y = false;
//# sourceMappingURL=2-types.js.map