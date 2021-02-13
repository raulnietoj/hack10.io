//12. Cree una función que tome una matriz de estudiantes y 
//devuelva una matriz de nombres de estudiantes.
const estudiantes = [
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" } ];

let estudiantes1 = estudiantes.map( (estudiante) => estudiante.name);
console.log(estudiantes1);