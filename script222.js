'use strict'

const runOnce = function () {
  console.log('This will never run again');
}
runOnce();

//IIFE

( function () {
  console.log('This will never run again');
  const isPrivate = 23;
}) ();

// console.log(isPrivate);

//arrow variant:

(() => console.log('This will ALSO never run again'))();

//Why was this invented?
//FN create scopes - a variable inside a FN will be private to outer scopes (& global)
//aka - THe data is encapsulated 

//in ES6 - variable declared with let & const inside a BLOCK {} - also create a scope

{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(isPrivate);
console.log(notPrivate);

//why IIFE are not that used in modern JS