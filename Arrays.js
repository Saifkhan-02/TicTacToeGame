/*let marks = [56,89,45,76,59,99];
console.log(marks);
marks[2] = 80; // change value of array as idx wise
// console.log(marks);
// for (let i= 0 ; i< marks.length; i++){
//     console.log(marks[i]);
// }

for (let mk of marks){
    console.log("Marks : ",mk);
}
    */

// Practice Question 1..
// find avg marks of students..

// let marks = [80,90,75,85,95];
// let sum = 0;
// for (let i of marks){
//     sum += i;   
// }
// console.log(sum);
// let res = sum /marks.length;
// console.log(`Average marks of class : ${res}` );
// //let newMarks = 



// Practice Question 2..

// let items = [250,645,300,900,50];

// for(let i = 0; i< items.length; i++ ){
//     console.log(`value before offer = ${items[i]}`)
//     let offer = items[i] / 10;
//     items[i] -= offer;
//     console.log(`value  after 10% offer applied = ${items[i]}`) 
      
// }

// Array Methds 1. Push() 2. Pop() 3. toString()

// let fruits = ["apple", "mango", "orange"];
// fruits.push("Grapes", "papaya");
// console.log(fruits);
// let deleteditems = fruits.pop();
// console.log(fruits);
// console.log("Deleted :",deleteditems);
// console.log(fruits.toString())


// Lets Practice...

let companies = ["byjus", "tcs", "vipro", "orient", "Google"];
deletedcomp = companies.shift();
console.log(companies);
console.log(deletedcomp);
companies.splice(1,2,"microsoft","Uber");
console.log("After changing : ",companies);
companies.push("Amazon");
console.log("After adding :",companies);