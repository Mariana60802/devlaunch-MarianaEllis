
class Vehicle {

    constructor(
        protected emoji : string,
        protected marca : string,
        protected modelo : string,
        protected anoFabricacion : number
    ){
        this.emoji = emoji
        this.marca = marca
        this.modelo = modelo
        this.anoFabricacion = anoFabricacion   
    }

    public arrancar(): void{
        console.log('Arranca')
    }

    public showInfo(): void{
        console.log('Informacion del vehiculo')
        console.log(`Marca ${this.marca}`)
        console.log(`Emoji: ${this.emoji}`)
        console.log(`Modelo: ${this.modelo}`)
        console.log(`Ano de Fabricacion: ${this.anoFabricacion}`)
    }
}

class Car extends Vehicle{

    private isAirOn: boolean

    constructor(
         marca : string,
         modelo : string,
         anoFabricacion : number,
         private numPuertas: number
    ){
        super('🚗', marca, modelo, anoFabricacion)
        this.numPuertas = numPuertas
        this.isAirOn = false
    }



}

class Motocicle extends Vehicle{

    constructor(
        marca : string,
        modelo : string,
        anoFabricacion : number,
   ){
       super('🏍️', marca, modelo, anoFabricacion)
      
   }

   public rueda() : void{
    console.log('ꔮ')
   }
}

const car1 = new Car('volvo','EX30',2024,4)
const moto1 = new Motocicle ('Honda','Super',2018)
car1.showInfo()
car1.arrancar()
moto1.showInfo()
moto1.rueda()