var sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  edad: 28,
  peso: 75,
};

console.log(`Al inicio del anio ${sacha.nombre} pesa ${sacha.peso}kg`);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANIO = 365;

const aumentarDePeso = (persona) => (persona.peso += INCREMENTO_PESO);
const adelgazar = (persona) => (persona.peso -= INCREMENTO_PESO);
for (let i = 1; i <= DIAS_DEL_ANIO; i++) {
  let random = Math.random();

  if (random < 0.25) {
    aumentarDePeso(sacha)
  } else if (random < 0.5) {
    adelgazar(sacha)
  }
}
console.log(`Al final del anio ${sacha.nombre} pesa ${sacha.peso.toFixed(2)}kg`);
