//10  Escriba una función que convierta un objeto en una matriz, 
//donde cada elemento representa un par clave-valor.
//toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

let obj = { };
const convertirArray = function(obj) {
    console.log(Object.entries(obj)); } 
convertirArray({ a: 1, b: 2, edad: 25 });