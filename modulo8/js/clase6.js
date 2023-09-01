const sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  edad: 28,
};

//const cumpleanios = (persona) => persona.edad++;

const cumpleaniosInmutable = persona => ({
    ...persona,
    edad: persona.edad + 1
})