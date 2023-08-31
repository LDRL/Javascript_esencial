class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }

  saludar(fn) {
    let {nombre, apellido} = this
    console.log(`Hola, me llamo ${nombre} ${apellido}`);
    if (fn){
        fn(nombre, apellido)
    }

  }

  soyAlto() {
    return this.altura > 1.8;
  }
}

class Desarollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
  }

  saludar(fn) {
    let {nombre, apellido} = this
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarollador`);
    if (fn){
        fn(nombre, apellido,true)
    }
   }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`Ah mira, no sabia que eras desarollador/a`);
  }
}

let sacha = new Persona("sacha", "Lifszyc", 1.72);
let erika = new Persona("Erika", "Luna", 1.65);
let arturo = new Desarollador("Arturo", "Martinez", 1.89);


sacha.saludar(responderSaludo)
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)