/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let animals = ['dog','cat','fish','parrot','hamster']

let product ={
    description: 'coca cola',
    sellPrice: 20.0,
    buyPrice: 16.50,
    stock: 100
}

let [element0,element1,,,] = animals

console.log(element0)
console.log(element1)


// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [array0 = '',array1 = '', array2 = '', array3 = '', array4 = ''] = animals
console.log(array0)
console.log(array1)
console.log(array2)
console.log(array3)
console.log(array4)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let stock = product.stock
let description = product.description
console.log(stock)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let sel = product.sellPrice
let buy = product.buyPrice

console.log(sel)
console.log(buy)



// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let car3 = {

    brand: 'Honda',
    model: 'Civic',
    year: 1999,
    makeCountry: 'Mexico',
    originCountry: 'Japan',
    color: "black",
    race: {
        competition: 'F1',
        position: 1,
        receCountrys:['Mexico', 'EUA', 'Monaco']
    }

}

let competition = car3.race.competition
let racing = car3.race.receCountrys

console.log(competition, racing)

// 6. Usa propagación para combinar dos arrays en uno nuevo

let myArray = [1, 2, 3, 4]

let newArray = [...myArray, ...animals]
console.log(newArray)

// 7. Usa propagación para crear una copia de un array
let copyArray = [...myArray]
console.log(copyArray)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let newObjet = {...car3, ...product}
console.log(newObjet)
// 9. Usa propagación para crear una copia de un objeto

let copyObjet = {...product}
console.log(copyObjet)
// 10. Combina desestructuración y propagación

let brand = car3.brand

let destrucPropagation = {...product, brand}
console.log(destrucPropagation)