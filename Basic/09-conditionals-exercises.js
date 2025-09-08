/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let gibeName = 'Roberto'

if (gibeName === 'Roberto') {
    console.log(gibeName)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = 'admin'
let password = '1234'

if (user === 'admin' && password === '1234') {
    console.log('Cargando...')
} else {
    console.log('Eerror: Usuario o contraseña incorrectos')
}


// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = -5

if (number === 0){
    console.log(`El numer ${number} es cero`)
} else if (number > 0) {
    console.log(`El numer ${number} es positivo`)
} else if (number < 0) {
    console.log(`El numer ${number} es negativo`)
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 17

if (age >= 18) {
    console.log("Puedes votar")
}   else {
    console.log(`No puedes votar, te faltan ${18 - age} años`)
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let personAge = 20

personAge >= 18 ? console.log("Adulto") : console.log("Menor")

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let month = 2

if (month === 1 && month <= 3){
    console.log("Estamos en Invierno")
} else if (month === 4 && month <= 6){
    console.log("Estamos en Primavera")
} else if (month === 7 && month <= 9){
    console.log ("Estamos en Verano")
} else if (month === 10 && month <= 12){
    console.log("Estamos en Otoño")
}else{
    console.log("Mes no válido")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let year = 2025

if (month === 1 || month === 3 
    || month === 5 || month === 7 
    || month === 8 || month === 10 || month === 12)
{
    console.log(`El mes ${month} tiene 31 días`)
}else if (month === 4 || month === 6 || month === 9 || month === 11){
    console.log(`El mes ${month} tiene 30 días`)
}else if (month === 2){
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
    console.log(`El mes ${month} tiene 29 días`)
    } else {
    console.log(`El mes ${month} tiene 28 días`)
    }
} else{
    console.log("Mes no válido")    
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let language = 'es'

switch (language) {
    case 'es':
        console.log('Hola')
        break
    case 'en':
        console.log('Hello')
        break
    case 'fr':
        console.log('Bonjour')
        break
    case 'de':
        console.log('Guten Tag')
        break
    default:
        console.log('Idioma no soportado')
        break   
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

console.log("***** Switch *****")

switch (month) {
    case 1:
    case 2:
    case 3:
        console.log("Estamos en Invierno")
        break
    case 4:
    case 5:
    case 6:
        console.log("Estamos en Primavera")
        break
    case 7:
    case 8:
    case 9:
        console.log("Estamos en Verano")
        break
    case 10:
    case 11:
    case 12:
        console.log("Estamos en Otoño")
        break
    default:
        console.log("Mes no válido")
        break
}


// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(`El mes ${month} tiene 31 días`)
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(`El mes ${month} tiene 30 días`)
        break
    case 2:
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
            console.log(`El mes ${month} tiene 29 días`)
            } else {
            console.log(`El mes ${month} tiene 28 días`)
            }
        break
    default:
        console.log("Mes no válido")    
        break
}
