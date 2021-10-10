let persons = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
  { name: "John", grade: 17, sex: "M" },
  { name: "Arya", grade: 14, sex: "F" },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade
const totalGrades = persons.reduce((acc, currentPerson) => {
  acc = acc + currentPerson.grade;
  return acc;
}, 0);

const avgGrade = totalGrades / persons.length;

// Find the average grade of male
let maleArr = persons.reduce((acc, cV) => {
  if (cV.sex === "M") {
    acc.push(cV.grade);
  }

  return acc;
}, []);

let totalMales = maleArr.length;
let totalMaleGrade = maleArr.reduce((acc, currentGrade) => {
  acc = acc + currentGrade;
  return acc;
}, 0);

const avgMaleGrade = totalMaleGrade / totalMales;

// Find the average grade of female
const femaleGrades = persons.reduce((acc, currentPerson) => {
  if (currentPerson.sex === "F") {
    acc.push(currentPerson.grade);
    // console.log(acc, currentPerson.grade);
  }
  return acc;
}, []);

const totalFemaleGrade = femaleGrades.reduce((acc, currentFemaleGrade) => {
  acc = acc + currentFemaleGrade;
  return acc;
}, 0);

const avgFemaleGrade = totalFemaleGrade / femaleGrades.length;

// Find the highest grade
const hightestGrade = persons.reduce((acc, currentPerson) => {
  if (currentPerson.grade > acc) {
    acc = currentPerson.grade;
  }
  return acc;
}, 0);

// Find the highest grade in male
const highestGradeMale = persons.reduce((acc, currentPerson) => {
  if ((currentPerson.grade > acc) & (currentPerson.sex === "M")) {
    acc = currentPerson.grade;
  }
  return acc;
}, 0);

// Find the highest grade in female
const highestGradeFemale = persons.reduce((acc, currentPerson) => {
  if ((currentPerson.grade > acc) & (currentPerson.sex === "F")) {
    acc = currentPerson.grade;
  }
  return acc;
}, 0);

// Find the highest grade for people whose name starts with 'J' or 'P'
const specialPeopleWithHigestGrade = persons.reduce((acc, currentPerson) => {
  if (
    (currentPerson.name.startsWith("J") ||
      currentPerson.name.startsWith("P")) &&
    currentPerson.grade > acc
  ) {
    acc = currentPerson.grade;
  }
  return acc;
}, -Infinity);

const fruitBasket = [
  "banana",
  "cherry",
  "orange",
  "apple",
  "cherry",
  "orange",
  "apple",
  "banana",
  "cherry",
  "orange",
  "fig",
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/

const fruitCount = fruitBasket.reduce((acc, currentFruit) => {
  if (typeof acc[currentFruit] != "undefined") {
    acc[currentFruit] += 1;
  } else {
    acc[currentFruit] = 1;
  }
  return acc;
}, {});
/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/
const fruitsObjArr = Object.entries(fruitCount);
console.log(fruitsObjArr);

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
// Using reduce flat data array
const flattenedData = data.reduce((acc, curVal) => {
  return acc.concat(curVal);
}, []);

const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array
const flattenedDataTwo = dataTwo.reduce((acc, curVal) => {
  return acc.concat(curVal);
}, []);

/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)

*/

const increment = (num) => num + 1;

const double = (num) => num * 2;

const decrement = (num) => num - 1;

const triple = (num) => num * 3;

const half = (num) => parseInt(num / 2);


let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

pipeline.reduce((acc, cv) => {
  acc = cv(acc)
  console.log(acc);
  return acc;
}, 3)

/*
/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/

let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];


//Find the output using pipeline2 the initial value if 8


pipeline2.reduce((acc, cv) => {
  acc = cv(acc)
  console.log(acc);
  return acc;
}, 8)