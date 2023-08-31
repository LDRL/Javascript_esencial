//Estructura de control condicionales

var sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  edad: 28,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true,
};

var juan = {
  nombre: "Juan",
  apellido: "Gomez",
  edad: 13,
};

const MAYORIA_DE_EDAD = 18

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`);

  if (persona.ingeniero) {
    console.log("Ingeniero");
  }

  if (persona.cocinero) {
    console.log("Cocinero");
  }

  if (persona.dj) {
    console.log("Dj");
  }

  if (persona.cantante) {
    console.log("Cantante");
  }

  if (persona.guitarrista) {
    console.log("Guitarrista");
  }

  if (persona.drone) {
    console.log("Drone");
  }
}



function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD;
}

//   imprimirProfesiones(sacha);
function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

imprimirSiEsMayorDeEdad(sacha);
imprimirSiEsMayorDeEdad(juan);
