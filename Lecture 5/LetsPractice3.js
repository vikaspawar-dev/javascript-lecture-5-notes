// Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.
// let marks = [85, 92, 78, 96, 88, 91];

// let toppersArr = marks.filter((val)=>{
//     return val > 90;
// });
// console.log(toppersArr);

// Qs. Take a number n as input from user. Create an array of numbers from 1 to n.

let n = prompt("Enter A Number : ");

let arr = [];

for(let i = 1; i<= n; i++){
    arr[i-1] = i ;
}
console.log(arr);

// Use the reduce method to calculate sum of all numbers in the array.

let sum = arr.reduce((res,curr)=>{
    return res + curr;
});
console.log("Sum = ", sum);

// Use the reduce method to calculate sum of all numbers in the array.
let factorial = arr.reduce((res,curr)=>{
    return res * curr;
});
console.log("Factorial = ",factorial);

