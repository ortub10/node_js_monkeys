const { showName } = require("./page2");

showName("Boaz");

//---------------------------------------------

const { shuffle, random } = require("lodash");

const abc_ar = ["a", "b", "c", "d"];
const shuffle_ar = shuffle(abc_ar);
let rnd = random(4, 10);

console.log("abc_ar", abc_ar);
console.log("shuffle_ar", shuffle_ar);
console.log("rnd", rnd);
