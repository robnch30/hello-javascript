/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i <= 20; i++) {
    let numberArray = []
    numberArray.push(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let i = 1
while (i <= 100) {
    let sum = 0
    sum += i
    console.log(`Sumando ${i} sum: ${sum}`)
    i++
}

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i <= 50; i++) {
    let par = i % 2
    if (par === 0) {
        console.log(`El numero ${i}, es par`)
    }
}



// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let namesArray = ['Roberto', 'Alejandra', 'Ameyali', 'Oliva', 'Don Beto', "Juan Jose",
    'Diana lady', "Cristina"
]

for (let values of namesArray) {
    console.log(values)
}


// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let menssage = "Hola soy un mensaje en javascript"
let vowels = new Set(['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'])
let numOfVowels = 0
for (let value of menssage) {
    if (vowels.has(value)) {
        console.log(`Soy ${value} una vocal`)
        numOfVowels++
    }
}
console.log('Total de vocales : ', numOfVowels)


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numerArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let j = 0
do {
    let multiply = 0
    for (let value of numerArray) {
        multiply = numerArray[j] * value
        console.log(`${numerArray[j]} x ${value} = ${multiply}`)
    }
    j++
} while (j < numerArray.length)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
i = 0
let numberMultiply = 10
let multyply = 5
while (i <= numberMultiply) {
    console.log(`${multyply} x ${i}: ${multyply * i}`)
    i++
}

// 8. Usa un bucle para invertir una cadena de texto
let newMenssage = []
for (let values of menssage) {
    newMenssage.unshift(values)
    //console.log(newMenssage)
}
console.log(newMenssage.join(""))

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let secuencia = 10
let k = 0
let fibonacci = []
console.log('>>>> Fibonachi')
do {
    if (fibonacci.length === 0) {
        fibonacci[0] = 0
        fibonacci[1] = 1
    } else {
        let suma = fibonacci[k] + fibonacci[k - 1]
        fibonacci.push(suma)
    }
    k++
} while (fibonacci.length < 10)
console.log(fibonacci)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let primaryNumbers = [1,4,5,6,7,10,20,345,12,11,9.24,33]
let higherNumber = []

for (let value of primaryNumbers){
    value >  10 ? higherNumber.push(value) : value
}
console.log(higherNumber)