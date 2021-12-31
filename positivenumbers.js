// Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.

function positiveNumbers(numbers) {
    let numbersArray = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0) {
            numbersArray.push(numbers[i])
        }
    }
    console.log('Result:', numbersArray)
    return numbersArray
}

positiveNumbers([0, 1, -4, 3.21, -5.33])
