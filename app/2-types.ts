
/******************
 * 01 - Declaration
 ******************/
//can declare with or without values, or not declare at all
let password: string;
let phoneNumber: number;
let email: string;
let socialSecurity: number;
let isMarried: boolean;

let username: string = "instructor";
let passwords: string = "Letmein1234!";
let instructorId: number = 5;

let greeting = 'Hello';

/*****************
 * 02 - Basic Types
 *******************/
let age: number = 40;
let currentYear: number = 2018

//also uses es6 octal literals:
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

let companyName: string;
companyName = "Eleven Fifty"

let isLoggedIn: boolean = true;
let isGoldLevelUser: boolean = true;

//Arrays:
//1
let studentList: string[] = ['Tom', 'Tracy', 'Nikaya']
//2
let allScores: Array<number> = [100, 92, 95, 96];

//any
let dataFromThirdParty: any = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);

//void:
//no type at all, not seen in variables, mainly functions that return no value
function sayHelloToAll() : void {
    console.log("Hello to all!")
}

//null/undefined:
let undefinedVariable: undefined = undefined;
let nullVariable: null = null;

//Tuple: Array with multiple types
// Declare a tuple type
let usernameAndId: [number, string];
// Initialize it
usernameAndId = [1, "kennisreally40"]; // OK
//types must be in order or wont work


//Enum
enum WeaponType { Sword, Saber, Spear}
let weapon: WeaponType = WeaponType.Sword
//like arrays, enum index starts at 0, but can be reassigned:
enum CardType { Ace = 1, Two, Three, Four } //CardType[1] = Ace
let cardType: string = CardType[2]
console.log(cardType);

/****************
 * 03 - Union Types
 ****************/
//Union types allow us to have more flexibility with our variables, but we still keep the intent of declaring a specific type for our variables.
let x: number | string;
let y: number | null;
x = '1234';
x = 1234;
//x = true; //these throw error because they are boolean, not number, string or null
//y = false;
