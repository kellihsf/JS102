//Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:

// A => 4 E => 3 G => 6 I => 1 O => 0 S => 5 T => 7

function leetspeak(thisString) {
    // if string contains the following letters, print the corresponding numbers
    // a = 4, e = 3, g = 6, i = 1, o = 0, s = 5, t = 7

    let yourString = thisString
    .replace("a", 4)
    .replace("e", 3)
    .replace("g", 6)
    .replace("i", 1)
    .replace("o", 0)
    .replace("s", 5)
    .replace("t", 7)
    
   return ("Your new string is: " + yourString)
}

console.log(leetspeak("this green apple"))


