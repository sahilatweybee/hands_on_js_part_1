// Coding Challenge-1
let markoalasScoreHight, markoalasScoreWeight;
let markoalasScoreBMI;

let johnHight, johnWeight;
let JohnBMI;

let markHigherBMI = markoalasScoreBMI > JohnBMI;

// For test Data-1
markoalasScoreHight = 1.69;
markoalasScoreWeight = 78;
markoalasScoreBMI = markoalasScoreWeight / markoalasScoreHight ** 2;
johnHight = 1.95;
johnWeight = 92;
JohnBMI = johnWeight / johnHight ** 2;
console.log("For Test-1 markHigherBMI = " + markHigherBMI + "\n" + JohnBMI + "\t" + markoalasScoreBMI + "\n");

// For test Data-2
markoalasScoreHight = 1.88;
markoalasScoreWeight = 95;
markoalasScoreBMI = markoalasScoreWeight / markoalasScoreHight ** 2;
johnHight = 1.76;
johnWeight = 85;
JohnBMI = johnWeight / johnHight ** 2;
console.log("For Test-2 markHigherBMI = " + markHigherBMI + "\n" + JohnBMI + "\t" + markoalasScoreBMI + "\n\n");

// Coding challenge-2
console.log("\n" + markoalasScoreBMI + "\t" + JohnBMI + "\n")
if(markHigherBMI == true){
    console.log(`Mark's BMI is (${markoalasScoreBMI}) Higher than John's BMI which is (${JohnBMI})!\n\n`);
}
else{
    console.log(`John's BMI is (${JohnBMI}) Higher than Mark's BMI which is (${markoalasScoreBMI})!\n\n`);
}

//Coding Clallenge-3
let avgDolphins = Number((97 + 112 + 101) / 3);
let avgKoalas=Number((109 + 95 + 106) / 3);
console.log("\n", avgDolphins, "\t", avgKoalas);

if(avgDolphins>=100 && avgKoalas>=100){
    if(avgDolphins>avgKoalas){ //Bonus-1
        console.log(`\nteam dolphins are winners with avg score of ${avgD}.`);
    }
    else if(avgDolphins < avgKoalas){
        console.log(`\nteam koalas are winners  with avg score of ${avgK}.`);
    }
    else{// Bonus-2
        console.log(`\nthere is tie between both the teams as both have same avg score. `);
    }
}
else{
    console.log('\nboth team are loser ');
}

// Coding Challenge-4
