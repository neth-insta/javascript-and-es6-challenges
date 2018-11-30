/* CHALLENGE 9 - Object Destructuring

Declare mult() function that will multiply values
of the x, y, z fields of the passed object.
*/

"use strict";

var obj = {
  x: 5,
  y: 20,
  z: 3
};

// Write mult() function here
function mult(obj){
  
  //  var {x, y, z} = obj;
  var x = obj.x;
  var y = obj.y;
  var z = obj.z;
   return x * y * z;

}

console.log(mult(obj));
// 300
