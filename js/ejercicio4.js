
//4. Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
let sumaTotal=0;
const sumatoria = (...sumandos) => {
  for (i=0; i<sumandos.length; i++)
    { sumaTotal+=sumandos[i]; }
  console.log(`La suma de los numeros ${sumandos} es ${sumaTotal}`); 
}
sumatoria(11,4,4,6);