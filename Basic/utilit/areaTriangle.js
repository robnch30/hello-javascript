// 9. Exporta una función, una constante y una clase desde una carpeta

export const nameExport = 'Area de Triangulos'

export function areaTriangle(base, height){
    return base * height / 2
}

export class Tringle {
    constructor(base, height){
        this.base = base
        this.height = height
    }

    area(){
        return this.base * this. height / 2
    }
}