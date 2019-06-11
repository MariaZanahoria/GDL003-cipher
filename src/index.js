const textToEncode = document.getElementById("textoC");
const botonCodificar = document.getElementById("botonCodificar");
const resultLabelC = document.getElementById("showC");

document.getElementById("botonCodificar").addEventListener("click", function(){
    const asciiText = window.cipher.encodeAscii();
    const desplazamientoC = document.getElementById("desplazamientoC").value;
    const cipherText = window.cipher.cipherText(asciiText,parseInt(desplazamientoC));
    const codedText = window.cipher.convertAsciiToString(cipherText);
    resultLabelC.innerHTML  = codedText;
});

const textToDecode = document.getElementById("textoD");
const botonDecodificar = document.getElementById("botonDecodificarD");
const resultLabelD = document.getElementById("showD");

document.getElementById("botonDecodificar").addEventListener("click", function(){
    const asciiText = window.cipher.encodeAscii();
    const desplazamientoD = document.getElementById("desplazamientoD").value;
    const cipherTextDec = window.cipher.cipherTextDec(asciiText,parseInt(desplazamientoD));
    const codedTextDec = window.cipher.convertAsciiToString(cipherTextDec);
    resultLabelD.innerHTML  = codedTextDec;
})