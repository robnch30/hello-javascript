/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let sum = 5 + 3
let rest = 5 - 3
let multipy = 5 * 3
let split = 5 / 3
let moduls = 5 % 3
let exponente = 5 ** 3


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let assignSum = sum++
let assignRest = rest--
let assignMultipy = multipy *= 2
let assignSplit = split /= 2
let assignModuls = moduls %= 2
let assignExponente = exponente **= 2

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(5 > 3)
console.log(5 < 10)
console.log(5 >= 5)
console.log(5 <= 10)
console.log(5 == 5)
console.log(3 === 3)
console.log(5 != 3)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(5 < 3)
console.log(5 > 10)
console.log(5 >= 10)
console.log(5 <= 3)
console.log(5 != 5)
console.log(3 === "3")

// 5. Utiliza el operador lógico and

console.log(22 > 10 && 5 < 10)
// true && true -> true

console.log(22 < 10 && 5 < 10)
// false && true -> false

// 6. Utiliza el operador lógico or

console.log(22 > 10 || 5 > 10)
// true || false -> true

console.log(22 < 10 || 5 > 10)
// false || false -> false

// 7. Combina ambos operadores lógicos

console.log((22 > 10 && 5 < 10) || (3 === "3"))
// true && true -> true || false -> true 

console.log((22 < 10 && 5 < 10) || (3 === "3"))
// false && true -> false || false -> false

console.log((22 > 10 && 5 < 10) || (3 === 3))
// true && true -> true || true -> true

console.log((22 < 10 && 5 > 10) || (3 === "3"))
// false && false -> false || false -> false

// 8. Añade alguna negación
console.log(!(22 < 10 && 5 > 10) || (3 === "3"))

// !(false && false) -> !false -> true || false -> true

console.log((22 > 10 && 5 < 10) || !(3 === 3))
// true && true -> true || !true -> false -> true


// 9. Utiliza el operador ternario
const age = 9
console.log(age >= 18 ? "Eres mayor de edad" : "Eres menor de edad")

// 10. Combina operadores aritméticos, de comparáción y lógicas