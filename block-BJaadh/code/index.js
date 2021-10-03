// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "));

// - Add two new words in the strings array "called" and "sentance"
strings.push("called", "sentence");
console.log(strings);

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(" "));

// - Remove the first word in the array (strings)
[...strings].shift();

// - Find all the words that contain 'is' use string method 'includes'
const wordsWithIs = strings.filter((word) => word.includes("is"));
console.log(wordsWithIs);

// - Find all the words that contain 'is' use string method 'indexOf'
const wordsWithIsIndexOf = strings.filter((word) => word.indexOf("is") !== -1);
console.log(wordsWithIsIndexOf);

// - Check if all the numbers in numbers array are divisible by three use array method (every)
console.log(numbers.every((num) => num % 3 === 0));

// -  Sort Array from smallest to largest
function compareFunction(a, b) {
  return a - b;
}
const sortedArray = [...numbers].sort(compareFunction);
console.log(sortedArray);

// - Remove the last word in strings
[...strings].pop();

// - Find largest number in numbers
let largestNumber = -Infinity;
numbers.forEach((num) => {
  if (num > largestNumber) {
    largestNumber = num;
  }
});
console.log(largestNumber);

// - Find longest string in strings
let longestStr = 0;
let longestWord = "";
const stringLengths = strings.forEach((word, index, arr) => {
  if (word.length > longestStr) {
    longestStr = word.length;
    longestWord = arr[index];
  }
});
console.log(longestWord);

// - Find all the even numbers
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// - Find all the odd numbers
const oddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log(oddNumbers);

// - Place a new word at the start of the array use (unshift)
const newWordStr = [...strings];
newWordStr.unshift("newWord");
console.log(newWordStr);

// - Make a subset of numbers array [18,9,7,11]
const numbersSubset = numbers.slice(3, 7);
console.log(numbersSubset);
// - Make a subset of strings array ['a','collection']
const stringsSubset = strings.slice(2, 4);
console.log(stringsSubset);

// - Replace 12 & 18 with 1221 and 1881
const replacedNumbers = [...numbers].map((num, index, arr) => {
  if (num == 12) {
    return (arr[index] = 1221);
  } else if (num == 18) {
    return (arr[index] = 1881);
  } else {
    return num;
  }
});
console.log(replacedNumbers);

// - Replace words in strings array with the length of the word
const wordLengths = strings.map((word) => word.length);
console.log(wordLengths);

// - Find the sum of the length of words using above question
const total = wordLengths.reduce((acc, num) => {
  return acc + num;
}, 0);
console.log(total);

// - Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" },
];
// - Find all customers whose firstname starts with 'J'
const firstNameJ = customers.filter((customer) =>
  customer.firstname.startsWith("J")
);
console.log(firstNameJ);

// - Create new array with only first name
const firstNameArr = customers.reduce((acc, customer) => {
  acc.push(customer.firstname);
  return acc;
}, []);
console.log(firstNameArr);

// - Create new array with all the full names (ex: "Joe Blogs")
const fullNameArr = customers.reduce((acc, customer) => {
  acc.push(`${customer.firstname}  ${customer.lastname}`);
  return acc;
}, []);
console.log(fullNameArr);

// - Sort the array created above alphabetically
const sortedNames = [...fullNameArr].sort();
console.log(sortedNames);

// - Create a new array that contains only user who has at least one vowel in the firstname.
const nameWithVowels = customers.filter((customer) =>
  customer.firstname.match(/[aoiou]/i)
);
console.log(nameWithVowels);
