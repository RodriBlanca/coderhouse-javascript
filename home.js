// Clase 01

/* const nombre = prompt('¿Cuál es tu nombre?');

const apellido = prompt('¿Cuál es tu apellido)');

const saludo = "Hola " + nombre + " " + apellido + "!!";

alert(saludo); */


// Clase 02

// const edad = prompt('¿Cuál es tu edad?');
// const acompañado = prompt('¿Viene acompañado?');


//Primer condición si la persona es mayor a 18.
// if(parseInt(edad) >= 18) {

//     //En caso de cumplirse, la segunda condición, si viene acompañado.
//     if(acompañado == "Si") {
//         alert('Puede pasar y tiene un descuento');
//     } else {
//         alert('Puede pasar pero no tiene descuento');
//     }
// } else if ((parseInt(edad) < 18) && (acompañado == "Si")) {
//     //Si la persona es menor y está acompañada. Y si ese acompañante es mayor, puede pasar, si es menor no.
//     const acompañante = prompt('¿Qué edad tiene el acompañante?');
//     if (parseInt(acompañante) >= 18) {
//         alert('Puede pasar con el acompañante adulto');
//     } else {
//         alert('No puede pasar si el acompañante es menor de edad también');
//     }
// } else {
//     //En caso de que no se cumpla alguna de las anteriores, no puede pasar por ser menor o por ser menor y no estar acompañado por un adulto.
//     alert('No puede pasar');
// }


// Clase 03

// Sumar diez numeros más al número que le pasemos

let num = parseInt(prompt('Ingrese un número menor a 50'));

for(let i = 0; i <= 10; i++) {
    let resultado = num + i;
    console.log(resultado);
}
