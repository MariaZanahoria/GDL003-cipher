window.cipher = {
// Funcion de cambiar el texto a ASCII
    encode: (textToEncode, offset) => {
      let encodedString = "";
      let upperCaseString = textToEncode.toUpperCase();
      for (let c = 0; c < upperCaseString.length; c++){
      let caracteres = upperCaseString.charCodeAt(c); 
// Funncion de cambiar el arreglo ASCII apicando desplazamiento
      if (caracteres===32){
      let space = String.fromCharCode(caracteres);
      encodedString += space;
      }
      if (caracteres>=65 && caracteres<=90){ 
      let cifrado = (caracteres - 65 + parseInt(offset))%26+65;
      console.log(cifrado)
// Funcion de convertir un arreglo ASCII a un string
      let space = String.fromCharCode(cifrado);
        encodedString += space;
    
    }
  }
  return encodedString;
}
};
