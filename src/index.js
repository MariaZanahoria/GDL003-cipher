let textToEncode = document.getElementById("textoC");
let botonCodificar = document.getElementById("botonCodificar");
let offset = document.getElementById("offset");
botonCodificar.addEventListener("click",()=>{
    let codedText = window.cipher.encode(offset.value, textToEncode.value);
    document.getElementById("showC").innerHTML = codedText;
});
let textToDecode = document.getElementById("textoD");
let botonDecodificar = document.getElementById("botonDecodificar");
let offsetD = document.getElementById("offsetD");
botonDecodificar.addEventListener("click", ()=>{
    let codedTextDec = window.cipher.decode(offsetD.value, textToDecode.value);
    document.getElementById("showD").innerHTML  = codedTextDec;
});
let botonResetE = document.getElementById("done");
let showC = document.getElementById("showC");
botonResetE.addEventListener("click", ()=>{
    textToEncode.value = "";
    offset.value = "";
    showC.innerHTML = "";
});
let botonResetD = document.getElementById("doneD");
let showD = document.getElementById("showD");
botonResetD.addEventListener("click", ()=>{
    textToDecode.value = "";
    offsetD.value = "";
    showD.innerHTML = "";
});
    
