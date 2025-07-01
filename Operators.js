/*let a = 10;
let b = 5;
console.log("Value of a & b is ",a,b,"->","a + b =", a+b );
console.log("a - b =", a-b);
console.log("a * b =",a*b);
console.log("a /b =", a/b);
console.log("a % b = ",a%b);
console.log(a**b);
a++;
b--;
console.log(a);
console.log(b);
console.log("a === b ", a===b); //strictly check (also check data type)
*/
//Logical Operators

/*let a = 9;
let b = 5;

let cond1 = a>b;
let cond2 = a===8;
console.log("cond1 && cond2 =", cond1 && cond2);
console.log("cond1 || cond2 =", cond1 || cond2);
*/

// conditional statements
/*let mode = "Dark";
let color ;
if (mode == "Dark"){
    color = "black";
}
else {
    color = "white";
}
console.log(color);
*/

// Check odd/even

/*let num = 10;
if (num%2 == 0){
    console.log(num, "is even");
}
else{
    console.log(num, "is odd");
}
*/

/*let mode = "white";
let color ;
if (mode == "Dark"){
    color = "black";
}
else if(mode === "blue") {
    color = "blue";
}
else if(mode === "red") {
    color = "red";
}

else {
    color = "white";
}
console.log(color);
*/
// Ternary operator

/*let age = 15;
result = age >= 18 ? "adult" : "not adult";
console.log(result);
*/


//alert("Hello") ;// pop up the message

//let name = prompt("Saif");
//console.log(name);

// Practice Questions
/*let num = prompt("Enter a number");
if(num%5===0){
    console.log(num,"is multiple of 5");
    
}else{
    console.log(num,"is not multiple of 5");
}
*/

let num = prompt("Enter an score 0 - 100");
if(num>=90 && num<=100){
    console.log("Grade A");
}
else if (num>=80 && num<= 89){
    console.log("Grade B");
}
else if (num >= 60 && num <= 79){
    console.log("Grade C");
}
else if (num >= 40 && num <= 59){
    console.log("Grade D");
}
else {
    console.log("Failed");
};
console.log("SAIF...13");
