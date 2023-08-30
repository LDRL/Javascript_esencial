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

function cumpleanios(persona) {
  return {
    ...persona,
    edad: persona.edad + 1,
  };
}

cumpleanios(sacha)
let sachaMasViejo = cumpleanios(sacha)
console.log("sacha joven " + sacha.edad)
console.log("sacha mas viejo "+sachaMasViejo.edad)

