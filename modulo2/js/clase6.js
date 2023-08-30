var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}


function imprimirNombreEnMayusculas({nombre}){
    var nombre= nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas({nombre: 'Pepito'})

