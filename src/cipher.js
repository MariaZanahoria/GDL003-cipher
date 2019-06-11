window.cipher = {
// Funcion de cambiar el texto a ASCII
encodeAscii = (string) => {
  let caracteres = [];
    valor = textToEncode.value
  const upperCaseString = valor.toUpperCase();
  for (let c = 0; c < upperCaseString.length; c++){
    caracteres[c] = upperCaseString.charAt(c).charCodeAt(0);
} 
return caracteres
},
// Funncion de cambiar el arreglo ASCII apicando desplazamiento
cipherText = (array, offset) => {
  let cipher = [];
  for (let c = 0; c <array.length; c++){
  let cifrado = (array[c] - 65 + offset)%26+65;
    cipher[c]=parseInt(cifrado);
}
return cipher
},
// Funcion de convertir un arreglo ASCII a un string
convertAsciiToString = (array) => {
  let encodedString = "";
  for(let c = 0; c < array.length; c++){
  let char = String.fromCharCode(array[c]);
    encodedString += char;
}
return encodedString
},
// Funcion de decodificar aplicando desplazamiento
cipherTextDec = (array, offset) => {
  let cipherDec = [];
  for (let i = 0; i <array.length; i++){
  let cifradoDec = (array[i] - offset - 65)%26+65;
    cipherDec[i]=parseInt(cifradoDec);
}
return cipherDec
}
}
