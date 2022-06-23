// Lacture: Values and letiables
let country = "India";
const continent = "Asia";
let population = 1400000000;
console.log("\n" + country + "\t" + continent + "\t" + population + "\n");

//Lecture: Data Types
isIsland = false;
let language;
console.log("\n" + isIsland + "\t" + language + "\n");
console.log();
country = 1300000000;
console.log("\n" + typeof(isIsland) + "\t" + typeof(population) + "\t" + "\t" + typeof(country) + "\t" + typeof(language) + "\n");

//Lecture basic operators
console.log(population/2);
console.log(population+1);
let finlandPopulation = 6000000;

if(population > finlandPopulation){
    console.log("\nyes \n");
}
else{
    console.log("\nno \n");
}
let avgPopulation=3300000;
let isAvg=population < avgPopulation;
    console.log("\n" + isAvg + "\n");

if(population > avgPopulation){
    console.log("\nIndia's population is above average \n");
}
else{
    console.log("\nIndia'population is" , population-avgPop,  "belopw avg \n");
}
let description = country + "is in " + continent + ", and its " + population + " people speak " + language;
