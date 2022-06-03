
// ------------------------
// Clase 01
// ------------------------

// console.log(b);
// console.info(b);
// console.warn(b);
// console.error(b);

// var a = 1;
// var b = "Fernando";

// console.log(b);
// console.info(b);
// console.warn(b);
// console.error(b);


// ------------------------
// Clase 02
// ------------------------

// function imprimir() {
//     for (var index = 0; index < 8000; index++) {
//         console.log("Imprimir");
//     }
// }



// function presionoOnclick() {
//     console.log("Click en boton");
// }

// imprimir();

// ------------------------
// Clase 03
// ------------------------
//var nombre = 'juan';

// ------------------------
// Clase 04
// ------------------------
// var num = 10;
// var str = "texto";
// var bol = true;
// var und = undefined;
// var nul = null;

// var obj = {
//     numero: 10,
//     texto: "texto nuevo",
//     objHijo: {
//         numeroHijo: 11,
//         textoHijo: "texto nuevo Hijo",
//     }
// };

// console.log(num);
// console.log(str);
// console.log(bol);
// console.log(und);
// console.log(nul);
// console.log(obj);


// ------------------------
// Video 10
// ------------------------

// var a = 10;
// var b = a;

// console.log("a; ", a);
// console.log("b; ", b);

// a = 20;

// console.log("a; ", a);
// console.log("b; ", b);

// // Cuando son objetos, los atributos se pasan por referencia
// // (Esto no sucede con la primitivas, solo con los objetos)
// // ya que se pasa por referercia
// var c = {
//     nombre: "Juana"
// }

// var d = c;
// console.log("c: ", c);
// console.log("d: ", d);

// c.nombre = "Maria";

// console.log("c: ", c);
// console.log("d: ", d);


// ------------------------
// Video 11
// ------------------------

var persona = {
    nombre: "Juana",
    apellidos: "Herrera",
    edad: 25,
    direccion: {
        pais: "Costa Rica",
        ciudad: "San Jose ",
        edificio: {
            nombre: "Edificio Principal",
            telefono: "2222-3333"
        }

    }
}

persona.direccion.zipcode = 1111;


var edificio = persona.direccion.edificio;
edificio.nopiso = "8vo piso";

console.log(persona);



var campo = "";

console.log(persona["nombre"]);




