const sacha = {
    nombre: "Sacha",
    apellido: "Lifszyc",
};

const yesika = {
    nombre: "Yesika",
    apellido: "Cortes",
};

function saludar(saludo = 'Hola'){
    console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

//Cambiar el contexto, this con bind

//const saludarASacha = saludar.bind(sacha)
//const saludarAYesica = saludar.bind(yesika)

//setTimeout(saludar.bind(sacha, 'Hola che'), 1000)

//saludar.call(sacha, 'Hola che')

saludar.apply(sacha, ['Hola che'])