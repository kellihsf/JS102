//kellisFunc is the name of the function

function kellisFunc(name) {
    return "what's up " + name;
}

let greeting = kellisFunc("Kelli");
console.log(greeting);


//below is anonymous function
// kellisfunc is a variable

let kellisFunc = function(name) {
    return "what's up " + name
}

let greeting = kellisFunc("Kelli");
console.log(greeting);

//saving functions to variables allows us to pass functions into other functions

let add = function(num1, num2) {
    return num1 + num2
}
console.log(add(3, 2))

let subtract = function(num1, num2) {
    return num1 - num2;
}
console.log(subtract(6, 4))

let calc = function(num1, num2, operation) {
    return operation(num1,num2)
    //placeholder for the name of a function to be passed in
}

// add is the callback function
// function passed into another function as a parameter
let addResult = calc(2, 4, add) // equals 6
console.log(addResult);

let subtractResult = calc(2, 4, subtract) // equals -2
console.log(subtractResult);

let arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach(element => {
    console.log(element);
})

arr.forEach(function(element) {
    console.log(element);
})

let newArr = arr.map(x => x * 5);
// x is each number in the array
console.log(newArr);

let greaterThanThreeArr = arr.filter(function(x) {
//accepts 3 arguments
// only returns if x > 3
return x > 3;
//return x % 2 === 0;
});
console.log(greaterThanThreeArr);

let newArr = [1, 3, 2, 0, 4, 5];

newArr.sort(function(a,b) {
    if(a - b > 0) {
        return - 1;
    } else if (a - b < 0) {
        return 1; 
    } else {
        return 0;
    }
});

//console.log(newArr);

let result = newArr.reduce(function(acc, el) {
    // acc = accumulator (total)
    // el = each element of the array
    // acc and el can be different names
    // the parameters are built in 
    return acc + el;
})

console.log(result);