// const array1 = [1,2,3,4];

// const initialValue = 0;
// const sumWithInitial = array1.reduce((accumulator, currentValue)=> accumulator + currentValue,initialValue,);

// console.log(sumWithInitial);

// let arr = [1,2,3,4,5,6];

// const output = arr.reduce((res,curr)=>{
//  return res + curr;
// });
// console.log(output);



// larg numeber find 
let arr1 = [1,2,3,4,5,6];

const output1 = arr1.reduce((prev,curr)=>{
 return prev > curr ? prev : curr;
});
console.log(output1);

// Smallest num 

let arr2 = [1,2,3,4,5,6];

const output2 = arr2.reduce((prev,curr)=>{
 return prev < curr ? prev : curr;
});
console.log(output2);