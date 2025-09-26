/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

/**
 * 
 * Recordar que para los export se debe de agregar el package.json type:modules 
 */

// 1. Exporta una función

export function areaSquare(sideA, sideB){
    return sideA * sideB
}

// 2. Exporta una constante
export const nameDev = 'robnavadev'

// 3. Exporta una clase

export class Person {

    constructor(name, fistSurname, secontSurname, birtDate){
        this.name = name
        this.fistSurname = fistSurname
        this.secontSurname = secontSurname
        this.birtDate = birtDate
    }

    walk(){
        console.log('Estoy caminando')
    }

    run(){
        console.info('Estoy corriendo')
    }

}

// 4. Importa una función
//Resuelto en el archivo import-exercises

// 5. Importa una constante
//Resuelto en el archivo import-exercises

// 6. Importa una clase
//Resuelto en el archivo import-exercises

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

export default function areaRectangle(base, height){
    return base * height
}

/* 
export default class Figure{
    constructor(name, base, height){
        this.name = name
        this.base = base
        this.height = height
    }
} 
*/

//Solo se puede tener un defautl, si agregas mas manda error

// export default const PI = 3.1416
//Esto muestra error.


// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

// 9. Exporta una función, una constante y una clase desde una carpeta

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior