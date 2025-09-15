/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function sum(number1, number2) {
    console.log(`Soy una suma : ${number1 + number2}`)
}
sum(230, 23)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function numberHigher(array = []) {

    let numberHigher = undefined

    if (array.length != 0 && array.length > 2) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i - 1]) {
                numberHigher = array[i]
            } else if (array[i - 1] > array[i]) {
                numberHigher = array[i - 1]
            } else {
                numberHigher = array[i]
            }
        }
    } else if (array.length === 1) {
        numberHigher = array[0]
    } else {
        numberHigher = undefined
    }

    return numberHigher

}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 10, 1, 0, 0, 0, 0, 0, 20, 23, 23]
let array0 = []
let array1 = [100000]
console.log(numberHigher(array))
console.log(numberHigher(array0))
console.log(numberHigher(array1))



// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

const numberVowels = function (menssage) {
    let vowels = new Set(['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'])
    let numOfVowels = 0
    for (let value of menssage) {
        if (vowels.has(value)) {
            console.debug(`Soy ${value} una vocal`)
            numOfVowels++
        }
    }
    console.log(`Numero de vocales en el mensaje : ${numOfVowels}`)
}

numberVowels("Soy una funcion escrita en javascrip")


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

const uperCaseMenssage = (menssage = '') => console.log(menssage.toUpperCase())

uperCaseMenssage("soy un mensaje en minusculas que despues dera todo en mayusculas")

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function cousinNumber(number = 0) {
    let cousinNumber = false
    if (number != 0 || number != 1) {
        function nexValidation(number) {
            let array = []
            let contCero = 0
            for (let i = 1; i < number; i++) {
                array.push(number % i)
            }

            for (let value of array) {
                if (value === 0) {
                    contCero++
                }
            }

            if (contCero < 2) {
                cousinNumber = true
            }
        }
        nexValidation(number)
    }

    return cousinNumber

}
let number = 1000003
console.log(`El numero ${number} ¿es primo? : ${cousinNumber(number)}`)

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function commonElements(array1, array2) {
    let newArray = []
    if (array1.length > array2.length) {
        setNewArry(array1, array2)
    } else if (array2.length > array1.length) {
        setNewArry(array2, array1)
    } else {
        setNewArry(array1, array2)
    }
    function setNewArry(mainArray, secondArray) {
        for (let i = 0; i < mainArray.length; i++) {
            for (let value of secondArray) {
                if (mainArray[i] === value) {
                    newArray.push(mainArray[i])
                }
            }
        }
    }
    return newArray

}

let msg1 = [1, 2, 3, 4, 5, 'holra', 'hola', false]
let msg2 = [0, 9, 8, 7, 6, 'hola', false]
console.log(commonElements(msg1, msg2))



// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

const sumPeers = function (numArray) {
    let sum = 0
    for (let value of numArray) {
        if ((value % 2) === 0) {
            sum = sum + value
        }
    }
    console.log(sum)
}
sumPeers([2, 4, 10, 3])
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

let numerArray = [2, 3, 6, 7, 9, 10]
let newArray = []
numerArray.forEach((value) => {
    newArray.push(value ** 2)
})
console.log(newArray)

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function textInverso(text = '') {
    let newText = []
    text = text.trimStart()
    text = text.trimEnd()
        for(let value of text.split(' ')){
        newText.unshift(value)
    }
    return newText.join(' ')
}

console.log(textInverso('   Hola yo soy un texto   '))


// 10. Crea una función que calcule el factorial de un número dado

const factorial = function (number = 0){
    let factorial = 1
    for (let i = 1; i <= number; i++){
        factorial *= i
        console.log(factorial)
    }  
    return factorial
}

console.log(factorial(3))