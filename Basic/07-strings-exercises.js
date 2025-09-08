/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let greeting = "Hola, "
let gibenName = "Mundo!"
let message = greeting + gibenName
console.log(message)

// 2. Muestra la longitud de una cadena de texto

console.log(message.length)

// 3. Muestra el primer y último carácter de un string
let secondMessage = "Hola, soy un string"
console.log(secondMessage[0],secondMessage[secondMessage.length - 1])


// 4. Convierte a mayúsculas y minúsculas un string
console.log(secondMessage.toUpperCase())
console.log(secondMessage.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let multilineMessage = `Hola
soy un
string
de
varias
lineas`

console.log(multilineMessage)

// 6. Interpola el valor de una variable en un string
let gibeName2 = "Roberto"
console.log(`Hola, ${gibeName2} bienvenido al mundo del javascrip!`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let stringWithSpaces = "Soy un string con espacios"
console.log(
    stringWithSpaces.replace("espacios","guiones")
    .replaceAll(" ","-")
)

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(stringWithSpaces.includes("string"))
console.log(stringWithSpaces.includes("Roberto"))

// 9. Comprueba si dos strings son iguales
let string1 = "Roberto Nava Chimal"
let string2 = "Alejandra Ramirez Creuz"

console.log(string1 === string2)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(string1.length === string2.length)