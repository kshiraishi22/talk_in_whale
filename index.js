let input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];
const whaleTalkLower = input.toLowerCase();

for (let i = 0; i < whaleTalkLower.length; i++) {
  for (let j = 0; j < vowels.length; j++){
    if (whaleTalkLower[i] === vowels[j]) {
      resultArray.push(whaleTalkLower[i]);
    }
  };
  if (whaleTalkLower[i] === "e" || whaleTalkLower[i] === "u"){
      resultArray.push(whaleTalkLower[i]) 
  };
};

console.log(resultArray.join('').toUpperCase());

/* concepts still confused about
-how to make this into a function and allow for console log to be in scope
-why does this code work but if you put the 2nd if statement right after the first if statement */