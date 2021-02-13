

//8. Cree una función que tome una matriz de matrices con números. 
//Devuelve una nueva matriz (única) con el mayor número de cada uno.
//findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

const matrices=[[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]];
    let maximo1 = Math.max.apply(null, matrices[0]);
    let maximo2 = Math.max.apply(null, matrices[1]);
    let maximo3 = Math.max.apply(null, matrices[2]);
    let resultado1 = [maximo1,maximo2,maximo3];

matrizUnica=(matrices) => console.log(resultado1); 
matrizUnica();
