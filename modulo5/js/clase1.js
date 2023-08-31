function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function() {
    return this.altura > 1.8
}


let sacha = new Persona('sacha', 'Lifszyc', 1.72)
let erika = new Persona('Erika', 'Lifszyc', 1.65)
let arturo = new Persona('Arturo', 'Martines', 1.89)

sacha.saludar()

//Agregar la altura
//prototype soy alto

sacha.soyAlto()
erika.soyAlto()
arturo.soyAlto()