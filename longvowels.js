// Write a function, which is given a string, return the result of extending any long vowels to the length of 5.

function longVowels (newString) {
    let originalString = "";
    let vowels = ["a", "e", "i", "o", "u"]
    let extraVowel = originalString + newString.repeat(3)
    return extraVowel
}

console.log(longVowels("ok"))