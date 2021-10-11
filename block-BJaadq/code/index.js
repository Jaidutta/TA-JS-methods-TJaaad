// NOTE: You can not use reduce methods to solve this exercise

function countAllPeople() {
  // your code goes here
  const houses = got.houses;
  const people = houses.map((house) => house.people);
  let totalPeople = 0;
  for (let person of people) {
    totalPeople = totalPeople + person.length;
  }
  return totalPeople;
}

function peopleByHouses() {
  // your code goes here
  const houses = got.houses;
  return houses.reduce((acc, currentHouse) => {
    acc[currentHouse.name] = currentHouse.people.length;
    return acc;
  }, {});
}

function everyone() {
  // your code goes here
  const houses = got.houses;
  return houses.reduce((acc, currentHouse) => {
    for (let person of currentHouse.people) {
      acc.push(person.name);
    }
    return acc;
  }, []);
}

function nameWithS() {
  // your code goes here
  const houses = got.houses;
  return houses.reduce((acc, currentHouse) => {
    for (let person of currentHouse.people) {
      if (person.name.includes("S")) {
        acc.push(person.name);
      }
    }
    return acc;
  }, []);
}

function nameWithA() {
  // your code goes here
  const houses = got.houses;
  return houses.reduce((acc, currentHouse) => {
    for (let person of currentHouse.people) {
      if (person.name.includes("A")) {
        acc.push(person.name);
      }
    }
    return acc;
  }, []);
}

function surnameWithS() {
  // your code goes here
  const houses = got.houses;
  const everyone = houses.reduce((acc, currentHouse) => {
    for (let person of currentHouse.people) {
      acc.push(person.name);
    }
    return acc;
  }, []);

  const surnameS = everyone.reduce((acc, currentName) => {
    console.log(currentName.split(" ").slice(-1)[0]);
    if (currentName.split(" ").slice(-1)[0].includes("S")) {
      acc.push(currentName);
    }
    return acc;
  }, []);
  return surnameS;
}

function surnameWithA() {
  // your code goes here
  const houses = got.houses;
  const everyone = houses.reduce((acc, currentHouse) => {
    for (let person of currentHouse.people) {
      acc.push(person.name);
    }
    return acc;
  }, []);

  const surnameA = everyone.reduce((acc, currentName) => {
    if (currentName.split(" ").slice(-1)[0].includes("A")) {
      acc.push(currentName);
    }
    return acc;
  }, []);
  return surnameA;
}

function peopleNameOfAllHouses() {
  // your code goes here
  const houses = got.houses;
  return houses.reduce((acc, currentHouse) => {
    acc[currentHouse.name] = currentHouse.people.map((person) => {
      return person.name;
    });
    return acc;
  }, {});
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), "with s");
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), "surname with s");
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
