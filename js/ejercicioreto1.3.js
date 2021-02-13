
//3. Crea una función que tome números y devuelva la suma de sus cubos.
//sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
let suma1 = 0;
const sumaCubos1 = (...cubos) =>
{
  for (let i=0; i<cubos.length; i++)
  { suma1 += Math.pow(cubos[i],3) } 
  console.log(`La suma de los cubos de ${cubos} es ${suma1}`);
}
sumaCubos1(1,5,9);