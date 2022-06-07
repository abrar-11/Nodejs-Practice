const { readFileSync, writeFileSync } = require("fs");

const file1 = readFileSync("./practice Files/testing.txt", "utf8");
const fruits = readFileSync("./practice Files/fruits.txt", "utf8");

// console.log(file1,fruits)

writeFileSync(
    "./practice Files/mergeSync.txt",
    `-------Data from Testing file ------- \n ${file1} \n\n-----Data from Fruits File ------- \n ${fruits}`
);

const vegetables = [
    "Brussels Sprouts",
    "Carrots",
    "Swiss Chard",
    "Parsnips",
    "Collard Greens",
    "Rutabagas",
    "Red Cabbage",
];


writeFileSync(
    "./practice Files/mergeSync.txt",
    `\n\n-------Vegetables ------- \n ${vegetables} `,
   { flag: 'a'}
);