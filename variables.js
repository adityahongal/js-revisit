"use strict";

let a = "let";
var b = 10;
const c = 20;

console.log(a);
console.log(b + ' var');
console.log(c + ' const');

// another example
let myName = "Addy";
let x = myName;
console.log(x);

let name2 = "Bridge";
name2 = "kingery";                     // no need to redeclare using let
console.log(name2);

var name = "john doe";
var name = "Kingston";                 // need to redeclare using var
console.log(name);