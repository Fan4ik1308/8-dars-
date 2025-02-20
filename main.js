// const numbers = [3,7,1,3,3,1];

// for(let index = 0;index < numbers,length; index++){
  
//     count+= numbers[index]
// }
// console.log(count)

const words = ["non", "banan", "mashina", "asal", "olma", "aziza", "Gul"];
const wordsWithN = [];
const wordsWithoutN = [];

words.forEach(word => {
    if (word.includes("n")) {
        wordsWithN.push(word);
    } else {
        wordsWithoutN.push(word);
    }
});

console.log(wordsWithN, "'n' harfi ishtirok etgan so'zlar");
console.log(wordsWithoutN, "'n' harfi ishtirok etmagan so'zlar");
