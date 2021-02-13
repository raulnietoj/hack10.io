
//5. Crear una función que reciba una matriz de valores y filtre los valores que no son string
const matriz = [25, 10, 'Raul', 10, 'Ela', true]
const filtrarString = matriz.filter(matrix => typeof matrix !== 'string' );
console.log(filtrarString);  