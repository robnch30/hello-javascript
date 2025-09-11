/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animals = ['dog','cat','fish','parrot','hamster']
console.log(animals)

// 2. Añade dos más. Uno al principio y otro al final

animals.unshift('turtle')
animals.push('rabbit')
console.log(animals)

// 3. Elimina el que se encuentra en tercera posición

animals.splice(2,1)
console.log(animals)

// 4. Crea un set que almacene cinco libros

let books = new Set(['Habitos atomicos', 'Padre rico padre pobre', 'El hombre en busca de sentido', 'Los secretos de la mente millonaria', 'El monje que vendió su ferrari'])
console.log(books)

// 5. Añade dos más. Uno de ellos repetido

books.add('Mentalidad del dinero')
console.log(books)
books.add('Padre rico padre pobre') // No se añade porque ya existe
console.log(books)

// 6. Elimina uno concreto a tu elección
books.delete('Habitos atomicos')
console.log(books)

// 7. Crea un mapa que asocie el número del mes a su nombre

let months = new Map([
    ["number",1],
    ["name","january"],
    ["number",2],
    ["name","february"],
    ["number",3],
    ["name","march"],
    ["number",4],
    ["name","april"],   
    ["number",5],
    ["name","may"],
    ["number",6],
    ["name","june"],
    ["number",7],
    ["name","july"],
    ["number",8],
    ["name","august"],
    ["number",9],
    ["name","september"],
    ["number",10],
    ["name","october"],
    ["number",11],
    ["name","november"],
    ["number",12],
    ["name","dicember"],
])

console.log(months)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
let monthNumber = 20
if(months.get("number") === monthNumber){
    console.log(`El mes número ${monthNumber} es ${months.get("name")}`)
}else{
    console.log(`El mes número ${monthNumber} no existe en el map`)
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
months.set('sumerMonths',['june','july','august'])
console.log(months)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let array = [1,2,3,4,5]
console.log("Im array",array)
let setFromArray = new Set(array)
console.log("Im set from array",setFromArray)
let mapFromSet = new Map()
mapFromSet.set('numbers',setFromArray)
console.log("Im map from set",mapFromSet)
