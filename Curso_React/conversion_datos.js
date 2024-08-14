const numero = 42;
const texto1 = String(numero);
const texto2 = numero.toString();

const numero2 = Number(texto1);
const numero3 = Number(true);
const numero4 = parseInt('42,2');
const numero5 = parseFloat('42.5');

//console.log(numero, texto1, texto2);
//console.log(numero2, numero3, numero4, numero5);

function convertirCadenaANumero(cadena) {
    let numero;
    // Convertir la cadena a un número
    numero = Number(cadena);
    return numero;
}
 
function convertirNumeroACadena(numero) {
    let cadena;
    // Convertir el número a cadena
    cadena = numero.toString();
    return cadena;
}
 
function convertirBooleanoACadena(booleano) {
    let cadena;
    // Convertir el booleano a cadena
    cadena = booleano.toString();
    return cadena;
}
 
function convertirCadenaABooleano(cadena) {
    let booleano;
    // Convertir la cadena a booleano
    booleano = !!cadena;
    return booleano;
}
 
function convertirNumeroABooleano(numero) {
    let booleano;
    // Convertir el número a booleano
    booleano = !!numero;
    return booleano;
}



