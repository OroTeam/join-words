const joinWords = require(".");

console.log(joinWords([])); // ""
console.log(joinWords(["apple"])); // "apple"
console.log(joinWords(["apple", "banana"])); // "apple and banana"
console.log(joinWords(["apple", "banana", "cherry"])); // "apple, banana, and cherry"
console.log(joinWords(["apple", "banana", "cherry", "date"])); // "apple, banana, cherry, and date"