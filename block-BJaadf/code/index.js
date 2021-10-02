let fruits = ["Banana", "Orange", "Apple", "Mango"];

// Add a new element ('Papaya') into fruits array at end
fruits.push("Papaya");

// Remove the last element from fruits array
fruits.pop();

// Log the current length of fruits array
console.log(fruits.length);

// Remove the first element from fruits and log the value of fruits (use delete arr[0])
fruits.shift();
console.log(fruits);

// Log the element on index 0 and 1
console.log(fruits.slice(0, 2));

// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)
let newFruits = [undefined, "Banana"];
newFruits.shift();

// Add a new element to the start ('Guava') and shift the index of all other to one higher value
newFruits.unshift("Guava");

// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value
newFruits.unshift("Dragon Fruit");

// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not
console.log(newFruits[0] === "Dragon Fruit" && newFruits[1] === "Guava");

// Update the value of index 1 to `Pears`
newFruits[1] = "Pears";
console.log(newFruits);

// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)
newFruits.splice(1, 0, "Kiwi", "Lemon");
console.log(newFruits);

// Remove (slice) all the element from index 5
newFruits.slice(0, 5);

// Create another array named moreFruits with values ['Berries', 'Melons']
const moreFruits = ["Berries", "Melons"];

// Concat moreFruits into fruits array (re-assign so the value gets updated)
fruits.push(...moreFruits);
// Log the name of all fruit in console
console.log(fruits);
// Convert each fruit name to lowercase and log it
for (let fruit of fruits) {
  console.log(fruit.toLowerCase());
}

// Convert all fruits name into lowercase and store in new array named lowercaseFruits
const lowercaseFruits = fruits.map((fruit) => fruit.toLowerCase());
console.log(lowercaseFruits);

// Convert all fruits name into uppercase and store in new array named uppercaseFruits
const uppercaseFruits = fruits.map((fruit) => fruit.toLocaleUpperCase());
console.log(uppercaseFruits);

let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
numbers.flat(1);

// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)
numbersTwo.flat(Infinity).forEach((elem) => console.log(elem));

// Convert the numbersThree array to one level element.
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.
// Use forEach to log all the elements of numberThree array
numbersThree = numbersThree.flat(Infinity);
numbersThree.forEach((elem) => console.log(elem));

// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map
const doubleNumbers = numbersThree.map((elem) => elem * 2);
console.log(doubleNumbers);

// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map
const tripleNumbers = numbersThree.map((elem) => elem * 3);
console.log(tripleNumbers);

// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map
const halfNumbers = numbersThree.map((elem) => elem * 1/2);
console.log(halfNumbers);

// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array
const oddNumbers = numbersThree.filter(elem => elem % 2 !== 0)
console.log(oddNumbers);

// Create a new variable named evenNumbers that store all the even numbers in numbersThree array
const evenNumbers = numbersThree.filter(elem => elem % 2 === 0)
console.log(evenNumbers);

// Find the index of 10 in numbersThree array
const indexOf10 = numbersThree.findIndex(elem => elem === 10 )
console.log(indexOf10);

// Reverse the values of numbersThree array
numbersThree.reverse()

// Reverse the values of numbersTwo array
numbersTwo.reverse()

// Join all fruits with '-', convert to uppercase and log 
const joinedFruits = fruits.join('-')
console.log(joinedFruits);

// Join all fruits with '&', convert to lowercase and log it
const joinFruitsWithAnd = fruits.join('&')
console.log(joinFruitsWithAnd);