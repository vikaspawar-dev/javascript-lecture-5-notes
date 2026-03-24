// Function 
// console.log("Welcome");

// console.log("Welcome".toUpperCase());

// console.log([1,2,3].push(4));

// Function Defination
// function myFunction(){
//     console.log("Welcome To In JavaScript !");
//     console.log("We Are Lerning Js.:)");
// }
// myFunction();
// myFunction();


//parameter -->input
// function myFunction(msg){ //parameter -->input
//     console.log(msg);
// }
// myFunction("I Love Js.");//argument

// function ---> 2 numbers, sum
// function sum(a, b){
// console.log(a + b);
// }
// sum(1,2);
// sum(10,2);

// example
function sum(x , y){
    //local variable --> scope
    s = x + y;
    return s;
}
let val = sum(3, 4);
console.log(val);