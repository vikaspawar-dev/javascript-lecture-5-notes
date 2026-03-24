let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let evenArr = arr.filter((val)=>{
    return val % 2 === 0;
});

console.log(evenArr);

let arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let oddArr = arr.filter((val)=>{
    return val % 2 !== 0;
});

console.log(oddArr);


let arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let Arr1 = arr.filter((val)=>{
    return val > 3;
});

console.log(Arr1);