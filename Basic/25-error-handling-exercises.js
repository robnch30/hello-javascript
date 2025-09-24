/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch

let objet

try {
    console.log(objet.email)
    console.log('Se ejecuto esta parte')
} catch {
    console.error("Se producjo un error")
}


// 2. Captura una excepción utilizando try-catch y finally

try {
    console.log(objet)
    console.log('Se ejecuto esta parte')
} catch (error) {
    console.error("Error de ejecucion: ", error.message)

} finally {
    objet = {
        name: 'Roberto'
    }
    console.log('Simepre se ejecuta esto apesar del error: ', objet.name)
}

// 3. Lanza una excepción genérica

try {
    console.log(hola)
} catch (error) {
    console.error(error)
}

// 4. Crea una excepción personalizada

class MyError extends Error {

    constructor(message, icon, data) {
        super(message)
        this.icon = icon
        this.data = data
    }

    printError() {
        console.log(this.icon, this.data)
    }

}



// 5. Lanza una excepción personalizada

try {
    console.log(cel)
} catch (error) {
    console.log('Error personaizado 0', error)
}

// 6. Lanza varias excepciones según una lógica definida

function numberVowels(menssage) {
    let vowels = new Set(['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'])
    let numOfVowels = 0
    console.log(menssage)
    if (typeof menssage === 'string') {
        for (let value of menssage) {
            if (vowels.has(value)) {
                console.debug(`Soy ${value} una vocal`)
                numOfVowels++
            }
        }
        if (numOfVowels === 0) {
            numOfVowels = 'No se cuenta con ninguna vocal'
        }
    }
    if (menssage === undefined) {
        throw new ReferenceError('El dato menssage es requerido')
    }
    if (!(typeof menssage === 'string')) {
        throw new MyError("El dato no es un string", '#!', menssage)
    }

    return numOfVowels
}

try {
    //console.log(numberVowels('Holas'))
    //console.log(numberVowels('23'))
    //console.log(numberVowels(23))
    //console.log(numberVowels('Este si es un mensaje'))
    console.log(numberVowels(false))
    //console.log(numberVowels())

} catch (error) {
    if (error instanceof MyError) {
        console.error(error.message)
        error.printError()
    }
    if (error instanceof ReferenceError) {
        console.error(`Mensaje de error propio:`, error.message)
    }
}


// 7. Captura varias excepciones en un mismo try-catch



// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
function foatTrasform(data) {
    let arrayFloat = []
    let float = parseFloat(data)
    if (isNaN(float)) {
        throw new ReferenceError('El dato no se puede hacer float')
    }
    if (data === 0) {
        throw new Error('El cero no puede ser flotante')
    }
    return float
}

try {
    //console.log(foatTrasform('hola mundo'))
    //console.log(foatTrasform())
    console.log(foatTrasform(0))

} catch (error) {
    console.error(error.message)
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

let auto = {
    brand: 'Honda',
    year: 1992,
    model: 'Civic',
    country: {
        make: 'Mexico',
        origin: 'Japan'
    },
    address: {
        numInt: 12
    }
}

function validateObjet(objet, properti) {
    // validar datos requeridos
    if (properti == undefined || objet == undefined) {
        throw new Error('Es requerido contar con el objeto y la propiedad a buscar')
    }
    // Validamos que sea un objeto
    if (typeof objet !== "object" || objet === null) {
        throw new Error('No se tiene un Objeto valido para evaluar')
    }

    // Validar que el properti sea de tipo string
    if (typeof properti !== 'string') {
        throw new TypeError('El valor de properti debe ser de tipo String')
    }
    // Si existe la propiedad en este nivel → true
    if (objet.hasOwnProperty(properti)) return true;

    // Buscar dentro de objetos anidados
    for (let key in objet) {
        if (typeof objet[key] === "object" && objet[key] !== null) {
            if (validateObjet(objet[key], properti)) {
                return true;
            }
        }
    }

    return false;
}

try {
    console.log(validateObjet(auto, 'numInt'))
} catch (error) {
    console.error(error.message)
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function sumInteger(a, b) {
    let countError = 0
    while (countError < 10) {
        try {
            countError++
            if (typeof a !== 'number' || typeof b !== 'number') {
                throw new Error(`Los datos deben de ser solo numeros enteros ${countError} de ${10}`)
            }
            return a + b
        } catch (error) {
            console.error(error.message)
            if (countError >= 10){
                throw new RangeError(`Fallo despues de los ${countError} intentos`)
            }
        }
    }
}

console.log(sumInteger(8, '12'))

