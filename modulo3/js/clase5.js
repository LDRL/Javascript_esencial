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

const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = sacha.peso - 3
let dias =0;

while(sacha.peso > META){
    if(comeMucho()){
        aumentarDePeso(sacha)
    }

    if(realizaDeporte()){
        adelgazar(sacha)
    }

    dias += 1
}



console.log(`Pasaron ${dias} dias hasta que ${sacha.nombre} adelgazo 3kg`);
