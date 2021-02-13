
//6. Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, 
//en ese orden.
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

const matriz1 =[];
const minMax = (matriz1) => { 
  let min= Math.min(...matriz1);
  let max= Math.max(...matriz1);
  let resultado = [min,max];
  console.log (resultado);
  //console.log(`El minimo es ${min} y el maximo es ${max}`);
};
minMax([1,2,3,4,5]);