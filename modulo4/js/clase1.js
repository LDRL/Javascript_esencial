let sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  altura: 1.72,
};

let alan = {
  nombre: "Alan",
  apellido: "Perez",
  altura: 1.86,
};

let martin = {
  nombre: "Martin",
  apellido: "Gomez",
  altura: 1.85,
};

let dario = {
  nombre: "Dario",
  apellido: "Gomez",
  altura: 1.85,
};

let vicky = {
  nombre: "Vicky",
  apellido: "Zapata",
  altura: 1.56,
};

let paula = {
  nombre: "Paula",
  apellido: "Barros",
  altura: 1.76,
};

let personas = [sacha, alan, martin, dario, vicky, paula];

console.log(personas);

for (let i = 0; i < personas.length; i++) {
  let persona = personas[i];
  console.log(`${persona.nombre} mide ${persona.altura}mts`);
}
