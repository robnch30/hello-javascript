/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente

/**
 * 
 * a = es el dividendo y  b = es el divisor
 * dividendo : Es la cantidas que se dibide.
 * divisor : Es el numero que dibide el dividendo.
 */

function splitNumber(a, b){
    if(b === 0){
        console.error('No se puede dividir entre cero', new Error('Esto es una indefinicion o indeterminacion'))
    }
    if(a === 0){
        return 0
    }
    return a / b
} 

console.log(splitNumber(3,0))

// 2. Crea una función que utilice warn correctamente

function splitNumber2(a, b){
    if(b === 0){
        console.error('No se puede dividir entre cero',  new Error('Esto es una indefinicion o indeterminacion'))
    }
    if(a === 0){
        console.warn('Exste una infinidad de soluciones, indeterminación')
        return 0
    }
    return a / b
}

console.log(splitNumber2(0,3))

// 3. Crea una función que utilice info correctamente

function areaTriangle(base, height){
    console.info('LA formuna para el area del triangulo es A = b * h / 2')
    console.info(`Igresaste los siguientes datos base: ${base}, height: ${height}`)
    return base * height / 2
}

console.log(areaTriangle(5,4))

// 4. Utiliza table

let user ={
    name: 'Roberto',
    age: 23
}
let array = [2,4,5, 'hola']

console.table(user)
console.table(array)

// 5. Utiliza group

console.group('Producto')
console.log('barCode: 123456')
console.log('stock:',120)
console.groupEnd()


// 6. Utiliza time

console.time("Tiempo inicial de ejecucion:")
for(let i = 0; i < 10; i++){
}

console.time("Tiempo inicial de ejecucion1:")
for(let i = 0; i < 100000; i++){
}
console.timeEnd('Tiempo inicial de ejecucion:')

console.timeEnd('Tiempo inicial de ejecucion1:')
// 7. Valida con assert si un número es positivo
let number = -1
console.assert(number >= 0, `El numero: ${number} es negativo`)

// 8. Utiliza count

console.count('Hola')
console.count('Hola')
console.count('Hola')
console.count('Hola')
console.countReset('Hola')
console.count('Hola')
console.count('Hola')


// 9. Utiliza trace

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
        console.trace('Funcion setNewArry')
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

// 10. Utiliza clear
//console.clear()