// uncomment multiple lines ->  Ctrl + k + U
//   for (let i = 1 ; i <= 10; i++){
//     for (let j= 1 ; j <= i ; j++){
//         console.log("*",j);
//         }
     
//  }

// Calculate sum of 1 to n 
/*
let num = prompt("Enter n : ");
let sum = 0;
for (let i = 1; i<=num; i++){
    sum +=i;
}
console.log("Sum :",sum);
console.log("Loop has ended");
*/

// Using with while loop
/*
let num = prompt("Enter n : ");
let i = 1 ,sum =0;
while(i <= num){
    sum +=i;
    
    console.log("Sum", sum);
    i++ ;
}
*/

// do while loop -> run atleast one time whether condition True or False..

// let i = 20;
// do{
//     console.log("Saif");
//     i ++;
// }while( i <= 10);

// let i = 5;
// do{
//     console.log("i = ",i);
//     i ++;
// }while( i <= 10);

//  for-of Loop -> one by one going on every string
// let str = "Saifkhan";
// let size = 0;
//  for (let i of str){ // iterator -> characters
//     console.log("i =", i);
//     size ++;
//  }
//  console.log("String size : ", size);

// for-in loop 

// let student ={
//     name : "Saif",
//     age : 20,
//     Cgpa : 7.72,
//     isPass : true,
// };

// for (let key in student){
//     console.log("key = ",key , "and" ,"value :" ,student[key]);
// }

// Practice Questions

// Print all even no. 0 to 100
/*
let num = prompt("Enter n : ");
for(let i = 1; i <= num; i ++){
    if (i%2 === 0){
        console.log(i)

    }
    
}
*/ 

// Create game where strt with any random no. Ask the user to keep guessing no. until user enter correct value..

let gameNum = 20;
let userNum = prompt("Guess the game Number");
while(gameNum != userNum){
    userNum = prompt("Wrong guess, Guess again ");
    
}
console.log("Congrats your number is mathched to game number: \n","Game number :", gameNum,"Your numbe :", userNum);

// String

// Template literals 
// let string = `This is a template literal`;
// console.log(string);
// console.log(typeof string);

// let obj = {
//     item  : "Hunzala",
//     price : 200,
// };

// let output = `The cost of ${obj.item} is only ${obj.price} rupees `;
// console.log(output);

// Let's practice


// Generate a username with @
// let uname = prompt("Enter your full name"); 

// newStr = "@" + uname  + uname.length  ;
// console.log(newStr);