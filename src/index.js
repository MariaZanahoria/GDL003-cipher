let textToEncode = document.getElementById("textoC");
let botonCodificar = document.getElementById("botonCodificar");
let offset = document.getElementById("offset");


botonCodificar.addEventListener("click",()=>{
    let codedText = window.cipher.encode(textToEncode.value, offset.value);
    console.log(codedText)
    document.getElementById("showC").innerHTML = codedText;
});

/*const resultLabelD = document.getElementById("showD");

document.getElementById("botonDecodificar").addEventListener("click", function(){
    const asciiText = window.cipher.encodeAscii();
    const desplazamientoD = document.getElementById("desplazamientoD").value;
    const cipherTextDec = window.cipher.cipherTextDec(asciiText,parseInt(desplazamientoD));
    const codedTextDec = window.cipher.convertAsciiToString(cipherTextDec);
    resultLabelD.innerHTML  = codedTextDec;
}); */