console.log("I like pizza.");
/*Variables are containers, behaves as if it was the value that it contains
let - variables are limited to block scope {}
var - variales are limited to a function(){}
global variables are declared outside any function and var will change browers window properties
then assignment (= assignment operator)*/
let firstName = "Jessie"; //strings
let lastName = "Battles";
let age = 31; //numbers
age += 1;
let student = true;//booleans
console.log(firstName +" "+ lastName);
console.log("Age", age);
console.log("Student Enrolled:", student);
document.getElementById("p1").innerHTML = "Hello, I am "+ firstName;
/* window.alert("I really love pizza!");
arithmetic expression is a combo of operands and operators that can be evaluated to a value
like y = x + 5 
Accept user input with prompt
let user = window.prompt("Name?")
console.log(user);*/

//HTML textbox
let username;

document.getElementById("myButton").onclick = function (){
        username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}

//TYPE CONVERSION = change datatype of a value to another
let birthdayAge = window.prompt("How old are you?");
console.log(typeof birthdayAge);
birthdayAge = Number(birthdayAge);
birthdayAge += 1;
console.log("Happy Birthday! You are ", birthdayAge, "years old!");
console.log(typeof birthdayAge);

let x;
let y;
let z;
x = Number("3.14");
y = String(3.14);
z = Boolean("pizza");
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

//CONST - variable that cant be changed
const pi = 3.14159;
let radius;
let circumference;
radius = window.prompt("Enter the radius of a circle:");
radius = Number(radius);

circumference = 2 * pi * radius;
console.log("Circumference is:", circumference);

//math functions
let pi2 = 3.14
//a = Math.round(a);
//a = Math.floor(a);
//a = Math.ceil(a);
//a = Math.pow(a);
pi2 = Math.sqrt(pi2);
//a = Math.abs(a);
//max and min / maximum = Math.max(x,y,z);
console.log(pi2);

/* let a;
let b;
let c;
a = window.prompt("Enter side A");
a = Number(a);
b = window.prompt("Enter side B");
b = Number(b);
c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
console.log("Side C:", c) */

document.getElementById("submitButton").onclick = function(){
    a = document.getElementById("aTextBox").value;
    a = Number (a);

    b = document.getElementById("bTextBox").value;
    b = Number (b);
    //HYPOTENUSE CALC
    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}

//COUNTER PROGRAM
let count = 0

document.getElementById("decreaseBtn").onclick = function(){
    count -=1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("resetBtn").onclick = function(){
    count =0;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("increaseBtn").onclick = function(){
    count +=1;
    document.getElementById("countLabel").innerHTML = count;
}
//RANDOM NUMBER GENERATOR

document.getElementById("rollDice").onclick = function(){

    let d = Math.floor(Math.random()* 8) +1;
    let e = Math.floor(Math.random()* 10) +1;
    let f = Math.floor(Math.random()* 20) +1;

    document.getElementById("dDiceLabel").innerHTML = " 8 Sided Dice: " +d;
    document.getElementById("eDiceLabel").innerHTML = "10 Sided Dice: " +e;
    document.getElementById("fDiceLabel").innerHTML = "20 Sided Dice: " +f;
}


//USEFUL STRING METHODS -always starts w/0 so charAT displays what character is at the index in ()
let userName = "Jessie Battles";
let phoneNumber = "123/123/1234"
console.log(userName);
console.log(userName.length);
console.log(userName.charAt(4));
console.log(userName.indexOf("B"));
console.log(userName.lastIndexOf("t"));
//userName = userName.trim();
//userName = userName.toUpperCase();
phoneNumber = phoneNumber.replaceAll("/","-");
console.log(phoneNumber);

/*SLICE METHOD extracts a section of a string and returns it as a new string
without modifying the original string*/
let fullName = "Example Name";
let beginningName;
let endName;
beginningName = fullName.slice(0,fullName.indexOf(" "));
endName = fullName.slice(fullName.indexOf(" ")+ 1);
console.log(beginningName);
console.log(endName);

//METHOD CHAINING -calling one method after another in one contiuous line of code
let Username = "jess0611";
//instead of letter = letter.toUpperCase(); console.log(letter); use--
let letter = Username.charAt(0).toUpperCase().trim();
//Just add other things to the same line.

//IF STATMENTS -basic form of decision making if a condition is true, then do something, else do not.
let drinkingAge = 21;
if(drinkingAge >=21){
    console.log("You can drink at the bar.");
}
else if(age >=65){
    console.log("You are a senior citizen!")
}
else{
    console.log("You cannot drink at the bar.")
}
//
let online = true;
if(online){
    console.log("User Online!")
}
else{
    console.log("User Offline!")
}

//TERNARY OP - shortcut for an if/else statment with 3 operands
//1. a condition with ? 2. expression if True 3. expression if False
// condition ? exprIfTrue : exprIfFalse
let adult = checkAge(21);
console.log(adult);
function checkAge(age){
    return age >= 21? true : false;
}


//CHECKED PROPERTY 
document.getElementById("checkButton").onclick = function(){
    const myCheckBox = document.getElementById("myCheckBox");
    const VisaBtn = document.getElementById("visa");
    const MastercardBtn = document.getElementById("mastercard");
    const PayPalBtn = document.getElementById("paypal");

    if(myCheckBox.checked){
    console.log("You are subscribed!");
}
    else{
    console.log("You are not subscribed!");
}
if(VisaBtn.checked){
    console.log("Visa Selected.");
}
else if(MastercardBtn.checked){
    console.log("Mastercard Selected.");
}
else if(PayPalBtn.checked){
    console.log("PayPal Selected.");
}
else{
    console.log("No payment selected.")
}
}
//SWITCH STATMENTS examine a value for a match against many case clauses, more efficient that many 'else if'

let grade = "A";
switch(grade){
    case "A":
        console.log("You got an A!");
        break;
    case "B":
        console.log("You got a B!");
        break;
    case "C":
        console.log("You got a C.");
        break;
    case "F":
        console.log("You got an F.");
        break;
}
// -- DIFF SWITCH EXAMPLE --//
let examGrade = 97;

switch(true){
    case examGrade >= 90:
        console.log("You did great!");
        break;
    case examGrade >=80:
        console.log("You did good!");
        break;
    case examGrade >=70:
        console.log("You did okay!");
        break;
    case examGrade >60:
        console.log("You failed!")
        break;
}

//&&|| ability to check more than 1 condition concurrently &&-Both true ||OR Either condition can be true
let temp = 15;
//let sunny = true;
//if(temp > 0 && temp < 30 && sunny){
if(temp > 0 && temp < 30){
    console.log("Good weather!")
}
else{
    console.log("Bad weather!")
}

if(temp <= 0 || temp >= 30){
    console.log("Bad weather!")
}
else{
    console.log("Good weather!")
}
//NOT ! typically used to reverse boolean value
let sunny = true;

if(!(temp > 0)){
    console.log("It's cold outside");
}
else{
    console.log("It's warm outside.");
}
if(!sunny){
    console.log("It's cloudy");
}
else{
    console.log("Its sunny");
}
//while loop - repeats some code while some condition is true, potentially infinite 
let playerName = "";

while(playerName == "" || playerName == null){
  playerName = window.prompt ("Enter Player Name");
}

console.log("Hello Player", playerName)
/*"DO WHILE" loop - do something, check condition, repeat if condition is true
let playerName;
do{
    playerName = window.prompt ("Enter Player Name");
}
while(playerName == "")
console.log("Hello Player", playerName)*/

//FOR LOOP - repeat some code a certain amount of times
//for(let counter = 1; counter <= 5; counter +=1){ 
//       console.log(counter);
//}
for (let hny = 5; hny > 0; hny-=1){ //u can count down by 2: hny -=2, -=3,-=4.. etc.
console.log(hny);
}
console.log("Happy New Year!");

/*break can break out of loop entirely: 
for(let i = 1; i <=20; i +=1){ 
    if (i == 13){
        break;  ("continue" will skip the number 13 and finish the list)
    }
    console.log(i);
}*/
//Nested Loop
//for(let n = 1; n <= 3; n+=1){
//    for(let m = 1; m <=3; m+=1)}

//FUNCTIONS = define code once, use it many times.
startProgram();

function startProgram(){
    let birthdayPartyFor = "Jessie";
    let newAge = 32;

    happyBirthdayParty(birthdayPartyFor,newAge); //PERAMETERS
}

function happyBirthdayParty(birthdayPartyFor,newAge){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday dear", birthdayPartyFor);
    console.log("You are" , newAge , "years old!") 
}
//RETURNS - returns a value back to the place wherre you invoked a function
let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width, height);

console.log("The area is: ", area);

function getArea(width, height){
    return width * height;
}

//template literals - delimitedd with (')

let tempName = "Jess";
let items = 3;
let total = 75;
//console.log(`Hello ${tempName}`);
//console.log(`You have ${items} in your cart.`)
//console.log(`Your total is $${total}.`)
let text = `Hello ${tempName} 
You have ${items} items in your cart.
Your total is $${total}.`

console.log(text);

/*.toLocalString() = returns a string with a language
number.toLocaleString(locale, {options});
locale - specify language / options -object with formatting options */
let myNum = 123456.789;
myNum = myNum.toLocaleString("en-US", currency: "USD");
console.log(myNum);
//myNum = myNum.toLocaleString("en-US");
//("en-US", currency: "USD"); US Englsih
//("hi-IN", currency: "INR"); Hindi
//("de-DE", currency: "EUR"); Standard German
//myNum = myNum.toLocaleString(undefined, {style: percent};
//myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});
