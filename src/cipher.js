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
}
