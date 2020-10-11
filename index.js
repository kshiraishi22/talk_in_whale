let input = "It is whAt it is";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];
const whaleTalkLower = input.toLowerCase();

for (let i = 0; i < whaleTalkLower.length; i++) {
  for (let j = 0; j < vowels.length; j++){
    if (whaleTalkLower[i] === vowels[j]) {
      resultArray.push(whaleTalkLower[i]);
    }
    if (whaleTalkLower[i] === "e" || whaleTalkLower[i] === "u"){
      resultArray.push(whaleTalkLower[i]) 
    };
  };
};

console.log(resultArray);