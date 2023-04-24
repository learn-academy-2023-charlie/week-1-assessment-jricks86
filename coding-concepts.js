// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: 9 because .length will count the number of indexes in the string
// b) Verify and explain: 10. I forgot to count the space as one index

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: o because it is the 4th index starting from 0
// b) Verify and explain: o is correct

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Ruby because indexing arrays make each item an index as opposed to each letter
// b) Verify and explain: Ruby. Javascript would be the 0 index, Ruby would be the first index, Python would be the second, and C++ would be the third

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY, SUNDAY because .toUpperCase capitalives the variable
// b) Verify and explain:  It returned an error because .toUpperCase can only be used on a string and not an array.  

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: the type of the array with 4
// b) Verify and explain: number because the typeof operator lets you know what data type of the variable is.  Since .length would put out the number 4 then that data type would be a number.
