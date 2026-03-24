let numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
    console.log(num * num);
});
    

let num = [2,4,2,4,6,7];

num.forEach((num,idx)=>{
    console.log(num**2,"index",idx);
})

let calcSquare = (num)=>{
    console.log(num*num);
};

num.forEach(calcSquare);