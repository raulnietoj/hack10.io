
//7. Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y 
//devuelva una cadena en forma de un número de teléfono.
//formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

const matriz2=[];
const numeroTelefono = (matriz2) => {
fono1=matriz2.slice(0,3);
fono2=matriz2.slice(3,6);
fono3=matriz2.slice(6,10);
console.log(`(${fono1.join('')}) ${fono2.join('')}-${fono3.join('')}`);
}
numeroTelefono([1,2,3,4,5,6,7,8,9,0]);