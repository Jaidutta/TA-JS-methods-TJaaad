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

// Create an array peopleName and store value of sex key from persons array
const peopleName = persons.map((person) => person.name);

// Create an array peopleGrade and store the value of grade key from persons array
const peopleGrade = persons.map((person) => person.grade);

// Create an array peopleSex and store the value of sex key from persons array
const peopleSex = persons.map((person) => person.sex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
const specialPeopleName = peopleName.filter((name) => {
  return name.startsWith("J") || name.startsWith("P");
});

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
const specialPeopleNameAOrC = peopleName.filter((name) => {
  return name.startsWith("A") || name.startsWith("C");
}).length;

// Log all the filtered male ('M') in persons array
const filteredMale = persons.filter((person) => person.sex === "M");

// Log all the filtered female ('F') in persons array
const filteredFemale = persons.filter((person) => person.sex === "F");

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
const specialFilteredFemale = filteredFemale.filter((female) => {
  return female.name.startsWith("C") || female.name.startsWith("J");
});

// Log all the even numbers from peopleGrade array
const evenNumbersPeopleGrade = peopleGrade.filter((num) => num % 2 === 0);

// Find the first name that starts with 'J' in persons array and log the object
const firstnamesStartsWithJ = persons.find((person) =>
  person.name.startsWith("J")
).name;

// Find the first name that starts with 'P' in persons array and log the object
const firstnamesStartsWithP = persons.find((person) =>
  person.name.startsWith("P")
).name;

// Find the first name that starts with 'J', grade is greater than 10 and is a female
const firstSpecialPerson = persons.find((person) => {
  return person.name.startsWith("J") && person.grade > 6 && person.sex === "F";
});

// Filter all the female from persons array and store in femalePersons array
const allFemale = persons.filter((person) => person.sex === "F");

// Filter all the male from persons array and store in malePersons array
const allMale = persons.filter((person) => person.sex === "M");

// Find the sum of all grades and store in gradeTotal
const gradeTotal = peopleGrade.reduce((acc, currentValue) => {
  acc = acc + currentValue;
  return acc;
}, 0);

// Find the average grade
const averageGrade = gradeTotal / peopleGrade.length;

// Find the average grade of male
const avgMaleGrade =
  filteredMale.reduce((acc, currentValue) => {
    acc = acc + currentValue.grade;
    return acc;
  }, 0) / filteredMale.length;

// Find the average grade of female
const avgFemaleGrade =
  filteredFemale.reduce((acc, currentValue) => {
    acc = acc + currentValue.grade;
    return acc;
  }, 0) / filteredFemale.length;

// Find the highest grade
const highestGrade = [...peopleGrade]
  .sort(function (a, b) {
    return a - b;
  })
  .pop();

// Find the highest grade in male
const highestMaleGrade = [...filteredMale.map((male) => male.grade)]
  .sort(function (a, b) {
    return a - b;
  })
  .pop();

// Find the highest grade in female
const highestFemaleGrade = [...filteredFemale.map((female) => female.grade)]
  .sort(function (a, b) {
    return a - b;
  })
  .pop();

// Find the highest grade for people whose name starts with 'J' or 'P'
const peopleWithNameJOrP = persons.filter((person) => {
  return person.name.startsWith("J") || person.name.startsWith("P");
});
const highestGradePeopleWithJOrP = peopleWithNameJOrP
  .map((person) => person.grade)
  .sort(function (a, b) {
    return a - b;
  })
  .pop();

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
console.log(peopleGrade);
const sortedPeopleGrade = peopleGrade.sort(function (a, b) {
  return a - b;
});
console.log(peopleGrade);

// Sort the peopleGrade in descending order
const descendingSortedGrade = [...peopleGrade].sort(function (a, b) {
  return b - a;
});
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

// Sort the array peopelName in ascending `ABCD..Za....z`
const sortedPeopleName = [...peopleName].sort()

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
