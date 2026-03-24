function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}
countVowels("aeiouAEIOU");
countVowels("WelcomeToIndia");

// Qs. Create an arrow function to perform the same task.

const countVow=(str)=>{
let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}
countVow("abcdefghijk");