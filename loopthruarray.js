let myFriends = ["Izzie", "Bun", "Bunner"];

for (let count = 0; count < myFriends.length; count++) {
    console.log(myFriends[count])
}

// Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80

function findSum(num1, num2) {
    if (num1 + num2 >= 50 && num1 + num2 <=80) {
        return 65;
    }
    else {
        return 80;
    }
}

console.log(findSum(222, 40))

let n = 5;    
let conversation = '';    
while (n > 0) {    
  if (n % 2 !== 0) {
    console.log(`${n} cookie: me`);    
    conversation += "one for me. ";    
  } else {
    console.log(`${n} cookie: you`);    
    conversation += "one for you\n";    
  }

  n--;    
}  


const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];

// loop through the ratings
// return any ratings that are a 5
// if not a 5, do not return
const max = ratings.length;
let count = 0;
for (let i=0; i<max; i++) {
  const stars = ratings[i];
  if (stars === 5) {
    count++;
  }
}
if (count >= 6) {
  console.log('This is a featured product!');
} else {
  console.log('Sorry, no homepage for you.');
}

// Which candidate won the election?
// const c1Votes = [996, 139, 80, 591, 217, 817, 235, 846, 141, 60];
// const c2Votes = [746, 154, 366, 515, 523, 846, 590, 806, 446, 23];

// add all of the #s in each array, compare the values
const max = c1Votes.length; // c2Votes.length is the same
let c1Total = 0;
let c2Total = 0;
for (let i=0; i<max; i++) {
  console.log(c1Votes[i]);
  c1Total += c1Votes[i];
  console.log(c2Votes[i]);
  c2Total += c2Votes[i];
}

if (c1Total > c2Total) {
    console.log('Candidate 1 is the winner!');
  } else if (c2Total > c1Total) {
    console.log('Candidate 2 is the winner!');
  } else {
    console.log('Time for a run-off. It was a tie!');
  }

//print all even numbers from 0-10
let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function numFunction () {
for (let i = 0; i < newArray.length; i++) {
    if (i % 2 == 0) {
        console.log(i); 
    }
}
}
numFunction();

//print a table containing multiplication tables

