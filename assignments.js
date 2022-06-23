// Lacture: Values and letiables
let country = "India";
const continent = "Asia";
let population = 1400000000;
console.log(country + "\t" + continent + "\t" + population + "\n");

//Lecture: Data Types
isIsland = false;
let language = "Hindi";
console.log(isIsland + "\t" + language + "\n");
console.log();
population = 1300000000;
console.log(typeof(isIsland) + "\t" + typeof(population) + "\t" + typeof(country) + "\t" + typeof(language) + "\n");

//Lecture: basic operators
console.log(population/2);
console.log(population+1);
let finlandPopulation = 6000000;

if(population > finlandPopulation){
    console.log("yes \n");
}
else{
    console.log("no \n");
}
let avgPopulation=3300000;
let isAvg=population < avgPopulation;
console.log(isAvg + "\n");

// Lecture: Tacking Decisions: if/else Statements
if(population > avgPopulation){
    console.log(`${country}'s population is above average \n`);
}
else{
    console.log(`${country}'s population is ${population - avgPopulation} belopw avg \n`);
}
let description = country + " is in " + continent + ", and its " + population + " people speak " + language;
console.log(description + "\n");

// Lecture: String and Template Literals
description = `${country} is in ${continent}, ans it's ${population} people speak ${language}`;
console.log(description + "\n");

// Lecture: Type Conversion
console.log(`\n'9' - '5' = 4\n`);
console.log('9' - '5');
console.log(`\n'19' - '13' + '17' = 23\n`);
console.log('19' - '13' + '17');
console.log(`\n'19' - '13' + 17 = 4\n`);
console.log('19' - '13' + 17);
console.log(`\n'123' < 57 = false\n`);
console.log('123' < 57);
console.log(`\n5 + 6 + '4' + 9 - 4 - 2 = 11 4 3\n`);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// Lecture: Equality Operators: == vs. ===
let numNeighbours = 1;
if(Number(numNeighbours) === 1){
    console.log("only one neighbour");
}
else if(numNeighbours > 1){
    console.log("more than one neighbours");
}
else{
    console.log("your country has 0 neighbour");
}

//logical operators
if(population < 50000000 && language =='English' && isIsland){
    console.log(`you should leave in ${country} :)`);
}
else{
    console.log(`${country} does not  meet your criteria :(`);
}
console.log(description + "\n");

//the switch statement 
switch(language){
    case 'Chinese':
        console.log("Most number of native speaker!\n");
        break;
    case 'Spanish':
        console.log("2nd place in number of native speakers\n");
        break;
    case 'English':
        console.log("3rd place\n");
        break;
    case 'Hindi':
        console.log("number  Four\n");
        break;
    case 'Arabic':
        console.log("5th most spoken language\n");
        break;
    default:
        console.log("Great langauge too :D\n");
}
// condition ternary operators  on hand 
 const age = 23;
 age >= 18 ? console.log("\nI like to dirnk wine 🍷"):
 console.log("\nI like to dirnk water\n");
 const drink = age >= 18 ? 'wine 🍷' : 'water 🌊';
 console.log(drink + "\n");
 console.log(`I like to drink ${age >=18 ? 'wine' : "water"}\n`);

 //lecture the conditional(ternary) operator
 console.log(`${country}'s ${ population > avgPopulation ?  'population is above avg':  'populaiton is below avg'}`);