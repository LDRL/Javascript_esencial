var edad = 27;
// edad = edad + 1
edad += 1;
console.log(edad);

var peso = 75;
// peso = peso - 2
peso -= 2;
console.log(peso);

var sandwich = 1;
// peso = peso + sandwich
peso += sandwich;
console.log(peso);

var jugarAlFutbol = 3;
// peso = peso - jugarAlFutbol
peso -= jugarAlFutbol;

var precioDeVino = 200.3;
var total = Math.round(precioDeVino * 100 * 3) / 100;
console.log(total);

var totalStr = total.toFixed(2);
console.log(total);

var total2 = parseFloat(totalStr);
console.log(total2);

var pizza = 8;
var personas = 2;
var cantidadPorcionesPorPersona = pizza / personas;
console.log(cantidadPorcionesPorPersona);
