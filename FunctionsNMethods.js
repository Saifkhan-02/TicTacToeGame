// function myfunction(a,n){
//     //parameter -> input
//     console.log(a,n);
// }
// myfunction("Saif",69); // argument

//Sum Function
/*function sum(a,b){
    s = a + b;
    return s ;
}
console.log("Sum = ",sum(5,6));

// Multiplication function

function mul(x,y){
    m = x*y;
    return m;
}
console.log("Multiplication = ", mul(5,3));

// Arrow Function
const arrowsum = (c,d)=>{
    s = c + d;
    return s;
}
console.log("Arrow Sum = ",arrowsum(5,5))

const arrowMul = (a,b) =>{
    m = a*b;
    return m; 
    
}
console.log("Arrow Multiplication = ", arrowMul(10,5));
*/

// function countVowels(str){
//     let count = 0;
   
//     for (const char of str){
//         if (
//             char === "a" ||
//             char === "e" || 
//             char === "i" || 
//             char === "o" || 
//             char === "u" 
//         ) {
//            count++ ;
//         }
      
//      }
//      return count;

    
// }

const countVow = (str) => {
   let count = 0;
     for (const char of str){
        if (
             char === "a" ||
             char === "e" || 
             char === "i" || 
             char === "o" || 
             char === "u" 
         ) {
            count++ ;
         }
      
      }
     return count;
    
}








