console.log("I like pizza.");
/* <= multi line comment
Variables are containers, behaves as if it was the value that it contains
declaration is "let" or "const" 
then assignment (= assignment operator)
*/
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
console.log(user);
*/

//HTML textbox
let username;

document.getElementById("myButton").onclick = function (){
        username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}

//Type conversion = change datatype of a value to another
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

//const - variable that cant be changed
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

/*
let a;
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
    
    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}

//COUNTER
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
//RANDOM NUM
let a;
let b;
let c;

document.getElementById("rollDice").onclick = function(){
    let a = Math.floor(Math.random()* 8) +1;
    let b = Math.floor(Math.random()* 10) +1;
    let c = Math.floor(Math.random()* 20) +1;

    document.getElementById("aDiceLabel").innerHTML = "8 Sided Dice: " +a;
    document.getElementById("bDiceLabel").innerHTML = "10 Sided Dice: " +b;
    document.getElementById("cDiceLabel").innerHTML = "20 Sided Dice: " +c;
}