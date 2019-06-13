window.cipher = {
// Funcion de cambiar el texto para cifrar a ASCII
    encode: (offset, textToEncode) => {
      let encodedString = "";
      for (let c = 0; c < textToEncode.length; c++){
      let caracteres = textToEncode.charCodeAt(c); 
// Funncion de cambiar el arreglo ASCII apicando desplazamiento
      if (caracteres===32){
      let space = String.fromCharCode(caracteres);
        encodedString += space;
      }
      if (caracteres>=65 && caracteres<=90){ 
      let cifrado = (caracteres - 65 + parseInt(offset))%26+65;
// Funcion de convertir un arreglo ASCII a un string
      let space = String.fromCharCode(cifrado);
        encodedString += space;
    }
  }
  return encodedString;
},
// Funcion de cambiar el texto para decifrado a ASCII
      decode: (offsetD, textToDecode) => {
      let decodedString = "";
      for (let d = 0; d < textToDecode.length; d++){
      let textDecode = textToDecode.charCodeAt(d); 
// Funncion de cambiar el arreglo ASCII apicando desplazamiento
      if (textDecode===32){
      let spaceD = String.fromCharCode(textDecode);
        decodedString += spaceD;
      }
      if (textDecode>=65 && textDecode<=90){ 
      let decifrado = (textDecode - 90 - parseInt(offsetD))%26+90;
// Funcion de convertir un arreglo ASCII a un string
      let spaceD = String.fromCharCode(decifrado);
        decodedString += spaceD;
    }
  }
  return decodedString;
}
};
