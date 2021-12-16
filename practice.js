//Madlib: Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).

function madLib (name, subject) {
    return (`${name}'s favorite subect in school is ${subject}`)
}

console.log (madLib("kelli", "art"));

//Tip Calculator: Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on: good -> 20% fair -> 15% bad -> 10%



function tipAmount (total, service) {
    //if (service == 'good', tip 20%);
    if (service == "good") {
        return total * .2;
    } else if (service == "fair") {
        return total * .15;
    } else {
        return total * .10;
    }

}
console.log(tipAmount(100, "good"));
console.log(tipAmount(40, "fair"));

// Tip Calculator 2: Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

function totalAmount (total, service) {
    if (service == "good") {
        return (total * .2) + total;
    } else if (service == "fair") {
        return (total *.15) + total; 
        }
        else {
            return (total * .10) + total;
        }
    }
console.log(totalAmount(100, "good"));
console.log(totalAmount(40, "fair"));
console.log(totalAmount(50))

//Print Numbers Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line.

