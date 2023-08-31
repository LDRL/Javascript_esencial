let sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  altura: 1.72,
  cantidadDeLibros: 12
};

let alan = {
  nombre: "Alan",
  apellido: "Perez",
  altura: 1.86,
  cantidadDeLibros: 22
};

let martin = {
  nombre: "Martin",
  apellido: "Gomez",
  altura: 1.85,
  cantidadDeLibros: 34
};

let dario = {
  nombre: "Dario",
  apellido: "Gomez",
  altura: 1.85,
  cantidadDeLibros:23
};

let vicky = {
  nombre: "Vicky",
  apellido: "Zapata",
  altura: 1.56,
  cantidadDeLibros: 91
};

let paula = {
  nombre: "Paula",
  apellido: "Barros",
  altura: 1.76,
  cantidadDeLibros: 182
};

let personas = [sacha, alan, martin, dario, vicky, paula];


// let acum =0

// for (let i = 0; i < personas.length; i++) {
//     acum = acum + personas[i].cantidadDeLibros
    
// }

const reducer = (acum, {cantidadDeLibros}) => {
    return acum + cantidadDeLibros
}

let totalDeLibros = personas.reduce(reducer, 0)
console.log(`En total todos tienen ${totalDeLibros} libros`);

//Filtrado persona bajas
