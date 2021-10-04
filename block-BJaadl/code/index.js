let words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
  "rhythm",
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function compareFunction(a, b) {
  return a.length - b.length;
}
const findLongestWord = (wordsArr) => [...wordsArr].sort(compareFunction).pop();

// - Convert the above array "words" into an array of length of word instead of word.
const lengthOfWords = (words) => words.map((word) => word.length);

// - Create a new array that only contains word with atleast one vowel.
const wordsWithOneVowel = (words) =>
  words.filter((word) => word.match(/[aeiou]+/i));

// - Find the index of the word "rhythm"
const findIndexOfChar = (words) => words.indexOf("rhythm");

// - Create a new array that contians words not starting with vowel.
const wordsNotStartWithVowel = (words) =>
  words.filter((word) => {
    return (
      !word.startsWith("a") &&
      !word.startsWith("e") &&
      !word.startsWith("i") &&
      !word.startsWith("o") &&
      !word.startsWith("u") &&
      !word.startsWith("A") &&
      !word.startsWith("E") &&
      !word.startsWith("I") &&
      !word.startsWith("O") &&
      !word.startsWith("U")
    );
  });

// - Create a new array that contianse words not ending with vowel
const wordsNotEndWithVowel = (words) =>
  words.filter((word) => {
    return (
      !word.endsWith("a") &&
      !word.endsWith("e") &&
      !word.endsWith("i") &&
      !word.endsWith("o") &&
      !word.endsWith("u") &&
      !word.endsWith("A") &&
      !word.endsWith("E") &&
      !word.endsWith("I") &&
      !word.endsWith("O") &&
      !word.endsWith("U")
    );
  });
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function add(acc, cV) {
  return acc + cV;
}
const sumArray = nums => nums.reduce(add, 0);

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
const multiplesOfThree = (nums) => nums.filter((num) => num % 3 === 0);

// - Create a new array that contains only even numbers
const evenNumbers = nums => nums.filter((num) => num % 2 === 0)

// - Create  a new array that contains only odd numbers.
const oddNumbers = nums => odd.filter((num) => num % 2 !== 0)

// - Create a new array that should have true for even number and false for odd numbers.
const newArr = nums => nums.map(num => num %2 === 0)

// - Sort the above number in assending order.
function compareFunctionAscending(a, b) {
  return a -b 
}
const ascendingSort = nums => [...nums].sort(compareFunctionAscending)

// - Does sort mutate the original array?
// Answer: sort mutates the original array 

// - Find the sum of the numbers in the array.
const total = nums => nums.reduce((acc, currentValue) => acc + currentValue, 0)

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
const averageNumbers = nums => nums.reduce((acc, currentValue) => acc + currentValue, 0) / nums.length

let strings = [ 
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
const averageWordLength = wrds => wrds.reduce((acc,currentValue) => acc +  currentValue.length, 0) / wrds.length