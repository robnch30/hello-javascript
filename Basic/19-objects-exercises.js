/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
const car = {
    brand: 'Honda',
    model: 'Civic',
    year: 1999,
    makeCountry: 'Mexico',
    originCountry: 'Japan',
    color:'wite'
}

// 2. Accede y muestra su valor
console.log(car)

// 3. Agrega una nueva propiedad

car.webPage = 'honda.com'

console.log(car)

// 4. Elimina una de las 3 primeras propiedades

delete car.makeCountry

console.log(car)

// 5. Agrega una función e invócala

const car2 = {
    brand: 'Honda',
    model: 'Civic',
    year: 1999,
    makeCountry: 'Mexico',
    originCountry: 'Japan',
    star: function(){
        console.log(`El auto ${car.brand}, esta arrancando`)
    }
}

car2.star()


// 6. Itera las propiedades del objeto

for(let key in car2){
    console.log(`la llave ${key} contiene ${car2[key]}`)
}

// 7. Crea un objeto anidado

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

console.log(car3)

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(car3.race.competition)
console.log(car3.race.position)
console.log(car3.race.receCountrys)

for (let key in car3.race){
    console.log(`La llave ${key} contiene ${car3.race[key]}`)

}



// 9. Comprueba si los dos objetos creados son iguales

console.log(car3 === car2)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(car3.marca === car.color)