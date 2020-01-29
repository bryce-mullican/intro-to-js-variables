// this is a comment
// this isupers another line
/**
 * This is a
 * multiline
 * comment
 * super cool
 */
var foo = 'pen';
var bar = 'hello world';
console.log(bar); // inline comment

let baz = 'hola mundo';
console.log(baz);

const boo = 'pizza';
console.log(boo);

var payRate = 18;
var payPerWeek = payRate * 40;
var payPerMonth = payPerWeek * 4;
var payPerYear = payPerMonth * 12;
console.log(payRate, payPerYear);
console.log('here');

// Data Types
// STRINGS
var string = 'hello';
var anotherString = "world";
// var broken = 'you can't do this';
var fix1 = "you can't do this";
var anotherEx = 'Bryce said "this is cool"';
// escape character "\"
var fix2 =  'you can\'t do this';
var anotherEx2 = "Bryce said \"this is cool\"";
var yetAnotherString = '0';

// INTEGERS
var integer = 2;
var anotherInt = 3.14;

// BOOLEAN
var bool = false;
var bool2 = true;

var temp = 1;
temp = 2;
temp = temp + 2; // 4
temp = temp - 1; // 3
console.log(temp); // 3
// concatenation "+"
var concat = 'hello' + ' world';
console.log(concat);
var result0 = '3' + 9; // 39
var result = ('2' * 1) + 3;
console.log(result); // string: '23' // 5
var result2 = '2' * 3;  // 6
console.log(result2);

// Mathmatical Operators
/* 
plus: +, // also the concatenation symbol!!!
minus: -,
times: *,
divide: /
modulus: %
...
*/

var cow;
console.log(cow); // undefined
cow = 'mooo';
console.log(cow); // string 'mooo'

// console.log(chicken); // not defined

// increment "++"
// decrement "--"
var foo2 = 0;
// foo2 = foo2 + 1;
foo2++; // 1
++foo2; // 2
// console.log(foo2++); // ???
// console.log(foo2);
console.log(++foo2);

// foo2 = foo2 - 1;
foo2--;
console.log(foo2); // 1

// +=
// -=

var foo7 = 0;
//foo7 = foo7 + 5;
foo7 += 3;
console.log(foo7); // 5

let foo8 = 5;
// foo8 = foo8 - 3;
foo8 -= 3;
console.log(foo8); // 2

var baz5, baz6, baz7;
var baz8 = 50, baz9 = 10;
var baz10 = baz8 + baz9; // 15

// Don't use a reserved keyword ie break, return, boolean
// Cant' start with a number ie var 9lives
// Variables are case sensitive ie FOO !== foo 
// You can start with an underscore, most use an underscore to 
// indicate a private variable

var _DONOTCHANGEME = 0;

//PTO V1
// PTO V1: A simple program that calculates the PTO(Paid time off) for 1yr at a fixed rate of 5hrs per paycheck paid bi-weekly.

var ptoRate = 5;
var weeksPerYear = 52;
var checksPerYear = weeksPerYear/2;
var ptoPerYear = ptoRate * checksPerYear;
console.log(ptoPerYear);

/* 
START
SET INT paychecksPerYear = 26
SET INT hrsPerPaycheck = 5
SET INT PTOperYearInHours = hrsPerPaycheck * paychecksPerYear
DISPLAY "This is a simple program that outputs how many hours you earn a year for PTO(Paid Time Off)."
DISPLAY "You earn PTOperYearInHours hours per year."
END 
*/

function hello(name) {
    // do stuff
    // get the name that was passed into the function
    //  and display it
    console.log(name);
}

// SCOPE
// GLOBAL SCOPE
var foo3 = 'hello';
let bar2 = 'mundo';
{
    // LOCAL SCOPE
    const yo = 'yoyo';
    let bar2 = 'world';
    var faz = 'hola';
    console.log(yo);
    console.log(bar2);
    {
        let bar2 = 'zoo';
        console.log(bar2);
        {
            let bar2 = ''
        }
    }
}

console.log(faz);
console.log(bar2); // ??/

var pay = 0;
{
    let payRate = 18;
    let weeklyPay = payRate * 40;
    let monthlyPay = weeklyPay * 4;
    let yearlyPay = monthlyPay * 12;
    pay = yearlyPay;
}
console.log(pay);

var foo4 = 1;
let foo5 = 2;
const foo6 = 3;
{
    const foo6 = 6;
}

foo4 = 4;
foo5 = 5;
// foo6 = 6; WILL NOT WORK!!!

// hello yo
