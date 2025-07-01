/*console.log("Saif khan welcome");
//console.log("I Love Js")
console.log("Variables in JS");
isFollow = false;
console.log(isFollow);
a = null;
b = undefined;
console.log(a);
console.log(b);

 let fullName = "Saif khan";
 console.log(fullName);


 var age = 20;
 var age = 21;
 var age = 22;
 console.log(age);

 const pi = 3.15; // Cannot change this value
 console.log(pi);


 {
    let a = 10;
    console.log(a);
 }
 {
    let a = 20;
    console.log( a);
 }
*/

 const student ={
    //keys : values --> also key values of pairs
    Name : "Saif",
    age : 20,
    cgpa : 9.5,
    idpass : true,
    };

console.log(student); // Display all key values
console.log(student.age); // Acess only age
console.log(student["age"]); // another method to access age
console.log(student["cgpa"]);
console.log(typeof(student)); // display type of student 

student["age"] = student["age"] + 1;
console.log(student["age"]); 