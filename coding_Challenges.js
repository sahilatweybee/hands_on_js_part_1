// Coding Challenge-1
let marksHight, marksWeight;
let MarksBMI = marksWeight / (marksHight ** 2);

let johnHight, johnWeight;
let JohnBMI = johnWeight / (johnHight ** 2);

let markHigherBMI = MarksBMI > JohnBMI;

// For test Data-1
marksHight = 1.69;
marksWeight = 78;
johnHight = 1.95;
johnWeight = 92;
console.log("For Test-1 markHigherBMI = " + markHigherBMI + "\n");

// For test Data-2
marksHight = 1.88;
marksWeight = 95;
johnHight = 1.76;
johnWeight = 85;
console.log("For Test-2 markHigherBMI = " + markHigherBMI + "\n");