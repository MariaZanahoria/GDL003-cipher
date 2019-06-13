window.cipher = {
// Funcion de cambiar el texto para cifrar a ASCII
    encode: (offset, textToEncode) => {
      let encodedString = "";
      for (let c = 0; c < textToEncode.length; c++){
      let caracteres = textToEncode.charCodeAt(c); 
// Funcion de no decodificar signos
      if (caracteres>=32 && caracteres<=64 || caracteres>=91 && caracteres<=96 || caracteres>=123 && caracteres<=255){
      let space = String.fromCharCode(caracteres);
        encodedString += space;
      }
//Funcion para codificar mayusculas aplicando desplazamiento
      if (caracteres>=65 && caracteres<=90){ 
      let cifrado = (caracteres - 65 + parseInt(offset))%26+65;
// Funcion de convertir codificado mayuculas ASCII a un string
      let space = String.fromCharCode(cifrado);
        encodedString += space;
      }
//Funcion para codificar minusculas aplicando desplazamiento
      if (caracteres>=97 && caracteres<=122){ 
      let cifrado = (caracteres - 97 + parseInt(offset))%26+97;
// Funcion de convertir codificado minusculas ASCII a un string
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
// Funcion de cambiar el arreglo ASCII apicando desplazamiento
      if (textDecode>=32 && textDecode<=64 || textDecode>=91 && textDecode<=96 || textDecode>=123 && textDecode<=255){
      let spaceD = String.fromCharCode(textDecode);
        decodedString += spaceD;
      }
//Funcion para decodificar mayusculas aplicando desplazamiento
      if (textDecode>=65 && textDecode<=90){ 
      let decifrado = (textDecode - 90 - parseInt(offsetD))%26+90;
// Funcion de convertir decodificado mayuculas ASCII a un string
      let spaceD = String.fromCharCode(decifrado);
        decodedString += spaceD;
      } 
//Funcion para decodificar minusculas aplicando desplazamiento
      if (textDecode>=97 && textDecode<=122){ 
      let decifrado = (textDecode - 122 - parseInt(offsetD))%26+122;
// Funcion de convertir decodificado minusculas ASCII a un string
      let spaceD = String.fromCharCode(decifrado);
        decodedString += spaceD;
    }
  }
  return decodedString;
}
};