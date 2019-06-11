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