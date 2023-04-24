// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// input: one number expressing a temperature
// output: one of the following: below boiling point, at boiling point, or above boiling point
// Process:
// create the function boilingPoint
// assign the parameter "temperature" to take in my number
// create my if/else conditions for each temperature category and the correct output to return
// run my code using the console.log for each test variable provided

const boilingPoint = (temperature) => {
    if (temperature <= 211) {
        return temperature + " is below boiling point"
    }
   else if (temperature === 212) {
        return temperature + " is at boiling point"
    }
    else {
        return temperature + " is above boiling point"
    }
}

const temperature1 = 42
// Expected output: "42 is below boiling point"
console.log(boilingPoint(42))
// output: 42 is below boiling point

const temperature2 = 350
// Expected output: "350 is above boiling point"
console.log(boilingPoint(350));
// output: 350 is above boiling point

const temperature3 = 212
// Expected output: "212 is at boiling point"
console.log(boilingPoint(212))
// output: 212 is at boiling point



// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// Process:
// create a new array to be used as the output called padresCombinedRuns
// combine the two arrays using the concat method
// run the code using the new array.length to make the output only the number of items. Running without the .length would return the two arrays combined with all of their number in a string.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

const padresCombinedRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(padresCombinedRuns.length);
// output: 9


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// Process:
// create a new string called reversedCohort to output the new reversed letters/words.
// Use the .split method to make the string an array
// use the .reverse method to reverse the contents of the array
// use the .join method to make the array a string again
// run the code using console.log with the new string

// p.s. If there is a way to do this without creating the new string, please let me know. 

const currentCohort = "Charlie 2023"
// Expected output: "3202 eilrahC"

const reversedCohort = currentCohort.split("").reverse().join("")

console.log(reversedCohort);
// output: 3202 eilrahC


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// input: given value to index
// output: number of the index where that number is in the array
// use .lastIndexOf because the given numbers are repeated throughout the array and the expected output is the last one.
const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

console.log(numberOfConnections.lastIndexOf(42)); 
// output: 7

const givenValue2 = 10
// Expected output: 8
console.log(numberOfConnections.lastIndexOf(10)); 
// output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// Process:
// use the .sort method to the given test values
// using b - a will sort the numbers in descending order
// run a console.log to out the array in descending order

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

sanDiegoSummerTemperatures.sort((a, b) => b - a)
console.log(sanDiegoSummerTemperatures)
// output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

sanDiegoWinterTemperatures.sort((a, b) => b - a)
console.log(sanDiegoWinterTemperatures)
// output: [68, 67, 66, 66, 62, 59, 59]