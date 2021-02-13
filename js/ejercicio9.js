
//9. Dada una palabra, escriba una función que devuelva el primer 
//índice y el último índice de un carácter.

const puCaracter = function(texto) {
    let pcaracter = texto[0];
    let ucaracter = texto[texto.length-1];
    console.log(`El primer caracter es ${pcaracter} y el ultimo es ${ucaracter}`);
  }
  puCaracter('carolin');