function sayHello(name) {
    console.log("Hello" + name);
}


let greet = function () { // LFS is just a label, RHS is just a value, any value, even a function
    console.log("Greetings!");
}

greet();

function wait(howLong) {
    setTimeout(function () {
        console.log("That long");
    }, howLong)
}

setTimeout(function() {
    console.log("The anon function has ran")
}, 200);

let anonFunc = () => {
    console.log("I am an anon function ");
}

const array1 = [1, 2, 42, 100];

// pass a function to a map

const map1 = array1.map(x => x * 2);
// array 1, x is each item in the array, multiply each item by 2

console.log(map1);

const array1 = [1, 2, 3, 4];

// pass a function to map
const map1 = array1.map(function(elementOfArray) {
    //elementOfArray = what map is going over
    // map1 is a variable
    // need to return bc it's inside of the curly brackets
    return elementOfArray * 2
});

const map2 = array1.map((elementOfArray) => {
    return elementOfArray *2
});

console.log(map1, array1);
