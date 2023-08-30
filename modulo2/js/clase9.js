let x = 4,
  y = "4";

// == convierte las dos variables a un mismo tipo
  console.log(x == y)

  // === compara el tipo y el valor que sea igual
console.log(x === y)


var sacha = {
    nombre: 'Sacha'
}

var otraPersona ={
    nombre: 'Sacha'
}


//Pregunta por referencia
console.log(sacha == otraPersona)

console.log(sacha === otraPersona)

//son el mismo objeto en memoria ram
var otraPersona1 = sacha;
console.log(sacha == otraPersona1)

///

otraPersona.nombre = 'Pepe'
console.log(sacha)
console.log(otraPersona)
