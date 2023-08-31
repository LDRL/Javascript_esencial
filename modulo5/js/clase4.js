function heredaDe(prototipoHijo, prototipoPadre){
    let fn = function(){}

    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn

    prototipoHijo.prototype.constructor = prototipoHijo
}


function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

Persona.prototype.soyAlto = function () {
  return this.altura > 1.8;
};

function Desarollador(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarollador, Persona)

Desarollador.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarollador`);
}



//let sacha = new Persona("sacha", "Lifszyc", 1.72);
// let erika = new Persona("Erika", "Lifszyc", 1.65);
// let arturo = new Persona("Arturo", "Martines", 1.89);


