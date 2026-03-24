let arr = [1, 2, 3, 4, 5];

arr.forEach(function printVal(val){
    console.log(val);
});

let arr1 = ["Pune","Delhi","Munbai","Hariyana","Ichalkaranji"];

arr1.forEach(function printVal(val){
    console.log(val);
});

let cities = ["Pune", "Mumbai", "Delhi", "Bangalore", "Hyderabad"];
cities.forEach(function printVal(val){
    console.log(val.toUpperCase());
});

// in Arrow function 
let array = [1,2,3,4,5,6];
array.forEach((val)=>{
    console.log(val);
})

let cities1 = ["Pune", "Mumbai", "Delhi", "Bangalore", "Hyderabad"];
cities1.forEach((val, idx,cities1)=>{
    console.log(val.toUpperCase(),idx,cities1);
});


// (Higher Order Function /Method) ForEach 
// function Parameter
// function return