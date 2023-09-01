var sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  edad: 28,
};

function esMayorDeEdad(persona) {
  let mensaje;
  const MAYORIA_DE_EDAD = 18;

  if (persona.edad >= 18) {
    mensaje = "Es mayor de edad";
  } else {
    mensaje = "Es menor de edad";
  }
  console.log(mensaje);
}

esMayorDeEdad(sacha);