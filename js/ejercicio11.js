//11. Cree la función que toma una matriz con objetos y devuelve la suma de los 
//presupuestos de las personas.
let personas = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 } ];
  
  let totalpresu=0;
  personas.forEach (persona =>{ totalpresu += persona.budget; } );
  console.log(totalpresu);