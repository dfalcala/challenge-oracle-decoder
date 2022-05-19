var entrada = document.querySelector("#entrada");
var salida = document.querySelector("#salida");
var copia = document.querySelector("#copia");

const cssMuneco = document.querySelector("#muneco");
const cssNada = document.querySelector("#mensaje");
const cssIngresa = document.querySelector("#ingresa");
const cssSalida = document.querySelector("#salida");
const cssFigura = document.querySelector("#figura");

function btnEncriptar(){
    var textoEncriptado = encriptar(entrada.value);
    salida.value = textoEncriptado;
        
    document.getElementById(cssMuneco.classList).style.display = "none";
    document.getElementById(cssNada.classList).style.display = "none";
    document.getElementById(cssIngresa.classList).style.display = "none";
    document.getElementById(cssFigura.classList).style.display = "none";
    document.getElementById(cssSalida.classList).style.display = "block";
}

function encriptar(fraseEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    fraseEncriptar = fraseEncriptar.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(fraseEncriptar.includes(matrizCodigo[i][0])){
            fraseEncriptar = fraseEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return fraseEncriptar;
}

function btnDesencriptar(){
    var nRespuesta = desEncriptar(entrada.value);
    salida.value = nRespuesta;
    
    document.getElementById(cssMuneco.classList).style.display = "none";
    document.getElementById(cssNada.classList).style.display = "none";
    document.getElementById(cssIngresa.classList).style.display = "none";

};

function desEncriptar(unionCinco){
    
    let nombre = unionCinco;
    let subsUno = nombre.split('ai');
    let unionUno = subsUno.join('a');

    let subsDos = unionUno.split('enter');
    let unionDos = subsDos.join('e');

    let subsTres = unionDos.split('imes');
    let unionTres = subsTres.join('i');

    let subsCuatro = unionTres.split('ober');
    let unionCuatro = subsCuatro.join('o');

    let subsCinco = unionCuatro.split('ufat');
    unionCinco = subsCinco.join('u');

    return unionCinco
}

function btnCopiar(){  
    salida.select();
    document.execCommand('copy');
    salida.value = ""
    entrada.value = ""
}