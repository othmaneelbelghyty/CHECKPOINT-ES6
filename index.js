// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

let inventorAge = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);

console.table(inventorsAge);
// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

let inventorNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);

console.table(inventorNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

let sortedInventors = inventors.sort((a, b) => a.year - b.year);

console.table(sortedInventors);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

let totalYearsLived = inventors.reduce(
  (total, inventor) => total + (inventor.passed - inventor.year),
  0
);

console.log(totalYearsLived);

// 5. Sort the inventors by years lived

let sortedByYearsLived = inventors.sort(
  (a, b) => b.passed - b.year - (a.passed - a.year)
);

console.table(sortedByYearsLived);

let sortedByYears = inventors.map((inventor) => {
  let YearsLived = inventor.passed - inventor.year;
  let sortedByYear = inventors.map((inventor) => {
    let yearLived = inventor.passed - inventor.year;
    return {
      firstName: inventor.first,
      lastName: inventor.last,
      yearLived: yearLived,
    };
  });
  console.table(sortedByYear);
});
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const col = document.querySelectorAll(".mw-category-group a[title]");

let arr = [];
for (let c of col) {
  arr.push(c.innerText);
}
let result = [];

const boulvards = [
  "Boulevards of Paris",
  "City walls of Paris",
  "Thiers wall",
  "Wall of Charles V",
  "Wall of Philip II Augustus",
  "City gates of Paris",
  "Haussmann's renovation of Paris",
  "Boulevards of the Marshals",
  "Boulevard Auguste-Blanqui",
  "Boulevard Barbès",
  "Boulevard Beaumarchais",
  "Boulevard de l'Amiral-Bruix",
  "Boulevard Mortier",
  "Boulevard Poniatowski",
  "Boulevard Soult",
  "Boulevard des Capucines",
  "Boulevard de la Chapelle",
  "Boulevard de Clichy",
  "Boulevard du Crime",
  "Boulevard du Général-d'Armée-Jean-Simon",
  "Boulevard Haussmann",
  "Boulevard de l'Hôpital",
  "Boulevard des Italiens",
  "Boulevard Lefebvre",
  "Boulevard de la Madeleine",
  "Boulevard de Magenta",
  "Boulevard Malesherbes",
  "Boulevard Marguerite-de-Rochechouart",
  "Boulevard Montmartre",
  "Boulevard du Montparnasse",
  "Boulevard Raspail",
  "Boulevard Richard-Lenoir",
  "Boulevard Saint-Germain",
  "Boulevard Saint-Michel",
  "Boulevard de Sébastopol",
  "Boulevard de Strasbourg",
  "Boulevard du Temple",
  "Boulevard Voltaire",
  "Boulevard de la Zone",
];

// for(let boulvard of boulvards){

//   if(boulvard.includes('de ')){
//       result.push(boulvard)
//   }
// }
let filtredBoulvards = boulvards.filter((boulvard) => boulvard.includes("de "));
console.log(filtredBoulvards);
// console.log(result)
// 8. Reduce Exercise
// Sum up the instances of each of these

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];
let obj = {};
for (let i = 0; i < data.length; i++) {
  if (obj[data[i]] == null) {
    obj[data[i]] = 1;
  } else {
    obj[data[i]]++;
  }
}
console.table(obj);
