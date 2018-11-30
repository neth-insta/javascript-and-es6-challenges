/* CHALLENGE 12 - Copy Array

Create copy of the a array.
*/

"use strict";

var a = [1, 2, 3,[4,5]];

var b;

//Copy array here
b = a.slice();
// b = [...a];
b.push("newElement");

console.log(a);
a[3].push(6);
// [1, 2, 3]

console.log(b);
// [1, 2, 3, "newElement"]
