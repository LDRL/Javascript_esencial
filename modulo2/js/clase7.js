var sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  edad: 28,
};

function imprimirNombreEnMayusculas(persona) {
  let { nombre } = persona;
  nombre = nombre.toUpperCase();
  console.log(nombre);
}

function imprimirNombreYEdad(persona) {
  let { nombre, apellido, edad } = persona;
  let msg = `Hola, me llamo ${nombre} ${apellido} y tengo ${edad} anios`;
  console.log(msg);
}
imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas({ nombre: "Pepito" });
imprimirNombreYEdad(sacha);
