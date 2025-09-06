/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Esto es un comentario en una línea.

// 2. Escribe un comentario en varias líneas

/**
 * Esto es
 * un comentario
 * a varias líneas.
 */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let num = 3
let string = "hola soy un string"
let boolean = true
let nulo = null
let indefinido = undefined
let simbolo = Symbol("miSimbolo")
let bigInt = 9007199254741991n

// 4. Imprime por consola el valor de todas las variables
console.log(num)
console.log(string)
console.log(boolean)
console.log(nulo)
console.log(indefinido)
console.log(simbolo)
console.log(bigInt)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof num)
console.log(typeof string)
console.log(typeof boolean)
console.log(typeof nulo) // object (esto es un error histórico de JavaScript)
console.log(typeof indefinido)
console.log(typeof simbolo)
console.log(typeof bigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
num = 42
string = "otro string"
boolean = false
nulo = null
indefinido = undefined
simbolo = Symbol("otroSimbolo")
bigInt = 12345678901234567890n

console.log(num)
console.log(string)
console.log(boolean)
console.log(nulo) // object (esto es un error histórico de JavaScript)
console.log(indefinido)
console.log(simbolo)
console.log(bigInt)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

num = "ahora soy un string"
string = 100
boolean = 50.1
nulo = "no soy null"
indefinido = null
simbolo = "no soy un símbolo"
bigInt = false

console.log(num)
console.log(string)
console.log(boolean)
console.log(nulo) // object (esto es un error histórico de JavaScript)
console.log(indefinido)
console.log(simbolo)
console.log(bigInt)


// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const CONST_NUM = 10
const CONST_STRING = "soy una constante"
const CONST_BOOLEAN = true
const CONST_NULO = null
const CONST_INDEFINIDO = undefined
const CONST_SIMBOLO = Symbol("constanteSimbolo")
const CONST_BIGINT = 12345678901234567890n

// 9. A continuación, modifica los valores de las constantes

/**
 * Las siguientes líneas producen error porque las constantes no pueden ser reasignadas

CONST_NUM = 20
CONST_STRING = "nuevo valor"
CONST_BOOLEAN = false
CONST_NULO = "no soy null"
CONST_INDEFINIDO = 100
CONST_SIMBOLO = "no soy un símbolo"
CONST_BIGINT = 9007199254741991n
*/


// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse