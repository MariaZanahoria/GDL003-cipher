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

}
