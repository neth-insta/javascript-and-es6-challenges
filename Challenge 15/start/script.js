/* CHALLENGE 15 - Iterate over String

Count number of the lowercase vowel letters in the string.
Vowel letters - a, e, i, o, u
*/

"use strict";

var vowelsCount = 0;
var vowels = ["a", "e", "i", "o", "u"];

var str = "Today is best day of my life";
var count = str.length;
// for(let i= 0; i < count; i++){
//     if(vowels.indexOf(str[i]) !== -1) vowelsCount++;
// }

for(let s of str){
    if(vowels.includes(s)) vowelsCount++;
}

// Write code here

console.log(vowelsCount);
// 8
