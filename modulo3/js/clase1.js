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

imprimirProfesiones(sacha);
