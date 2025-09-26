/**
 * 
 * Importando modulos
 * 
 */

import {areaSquare, nameDev, Person} from './31-modules-exercises.js'
import {nameExport, Tringle, areaTriangle} from './utilit/areaTriangle.js'

console.log(areaSquare(23,23))
console.log(nameDev)

let person = new Person('Alejandra', 'Ramirez', 'Cruz', '15/07/1992')

console.log(person.walk())

console.log(nameExport)
console.log(areaTriangle(20, 10))

let triangle = new Tringle(40, 100)

console.log(triangle.area())