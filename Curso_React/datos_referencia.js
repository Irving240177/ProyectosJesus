// Object
// Array
// function

const persona = {
    nombre: 'Juan', 
    edad: 30,
    direccion: {
        calle: 'Calle 123',
        ciudad: 'Ciudad 1',
    },
    presentarse: function() {
       console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

persona.presentarse();

//console.log(persona.nombre);
//console.log(persona.direccion.calle);
//console.log(array[1]);

const array = [1, 2, 3, 4, 5];

function suma(a, b){
    return a + b;
}

console.log(suma(5, 10));

