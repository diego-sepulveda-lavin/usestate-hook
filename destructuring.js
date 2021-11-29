const animales = ['perro', 'gato','pajaro', 'jirafa']

const [primero, segundo, ...resto] = animales

console.log(primero)
console.log(segundo)
console.log(resto)


const suma = (a,b) => {
    const resultado = a + b
    return [a,b,resultado]
}

const [primerNumero, segundoNumero, total] = suma(2,3)

console.log(primerNumero)
console.log(segundoNumero)
console.log(total)

const persona = {
    nombre: "Juan",
    edad: 25
}

const {nombre, edad} = persona

console.log(edad)
console.log(nombre)
