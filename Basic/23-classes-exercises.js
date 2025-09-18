/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class Product{
    constructor(code, description, stock){
        this.code = code
        this.description = description
        this.stock = stock
    }
}

// 2. Añade un método a la clase que utilice las propiedades
class ProductWhitMetod{

    constructor(code, description, stock){
        this.code = code
        this.description = description
        this.stock = stock
    }

    validateStock(num){
        let newStock
        if(num <= this.stock){
            console.log('Se puede vender.')
            newStock = this.stock - num
            console.log(`Se vendieron ${num} del stok en tienda ${this.stock}
                Numero nuevo de stock ${newStock}`)
         }

         return newStock
    }

}

// 3. Muestra los valores de las propiedades e invoca a la función

let producto3 = new ProductWhitMetod('1234', 'coca cola', 100)
console.log(producto3.code)
console.log(producto3.description)
console.log(producto3.stock)

console.log(producto3.validateStock(3))


// 4. Añade un método estático a la primera clase

class ProductWhitStatic{
    constructor(code, description, stock){
        this.code = code
        this.description = description
        this.stock = stock
    }

    static subTotal(quantity, salePrice){
        let subTotal = 0.0
        subTotal = quantity * salePrice
        return subTotal
    }
}


// 5. Haz uso del método estático

console.log(ProductWhitStatic.subTotal(24, 20))

// 6. Crea una clase que haga uso de herencia

class Api{
    constructor(dominio, url){
        this.dominio = dominio
        this.url = url
    }

    conection(){
        console.log('Conectando al API')
    }

    test(){
        console.log('Test conection Appi ...')
    }
}

class mapsApi extends Api {
    constructor (dominio, url, nameApi, data){
        super(dominio,url)
        this.nameApi = nameApi
        this.data = data
    }

    getData(){
        console.log('Datos de la consulta')
    }

    test(){
        console.log(`Test ${this.nameApi}`)
    }
}

let googleMaps = new mapsApi('https://google.com.mx','/maps', 'googleMaps') 

googleMaps.conection()
googleMaps.getData()


// 7. Crea una clase que haga uso de getters y setters

class ApiGetSet{
    constructor(dominio, url){
        this.dominio = dominio
        this.url = url
    }

    get getDominio(){
        return this.dominio
    }

    set setDominio(dominio){
        this.dominio = dominio
    }

    get getUrl(){
        return this.url
    }

    set setUrl(url){
        this.url = url
    }

    conection(){
        console.log('Conectando al API')
    }


}

let conetApi = new ApiGetSet('https//facebook.com','/marketPlace')
console.log(conetApi.getDominio)
conetApi.setDominio = 'https//facebook.pre.com'
console.log(conetApi.getDominio)


// 8. Modifica la clase con getters y setters para que use propiedades privadas

class Auto {
    #brand
    #model

    constructor(brand, model, year){
        this.#brand = brand
        this.#model = model
        this.year = year
    }

    get getBrand(){
        return this.brand
    }

    set setBrand(brand){
        this.brand = brand
    }

    get getModel(){
        return this.model
    }

    set setModel(model){
        this.model = model
    }
}

// 9. Utiliza los get y set y muestra sus valores

let honda = new Auto('Honda', 'Civic', '1992')
console.log(honda.year)
console.log(honda.getBrand)
honda.setBrand = 'VW'
console.log(honda.getBrand)
console.log(honda.getModel)

// 10. Sobrescribe un método de una clase que utilice herencia

googleMaps.test()