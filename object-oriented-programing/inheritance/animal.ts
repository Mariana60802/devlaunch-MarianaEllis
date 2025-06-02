class Animal {

    constructor(
        protected name: string,
        protected spices : string,
        protected age : number
    ){
         this.name = name,
         this.spices = spices,
         this.age = age
    }

    makesSound() {

    }

    toString(){

        console.log( `
            Name : ${this.name}
            Spices : ${this.spices}
            Age : ${this.age}
        `)
    }
}

class Lion extends Animal{

    constructor(
        name: string,
        spices : string,
        age : number
    ){
        super(name,spices,age)

    }

    makesSound(): void {
        console.log('GRRR')
    }


}


type TrunkSize = 'small' | 'medium' | 'large'
class Elephantes extends Animal{

    constructor(
        name: string,
        spices : string,
        age : number,
        private trunkSize: TrunkSize
    ){
        super(name,spices,age)
        this.trunkSize = trunkSize

    }

    makesSound(): void {
        console.log('Elephant sound')
    
    }

    toString(): void {
        console.log(this.toString)
        console.log(`Trunk Size: ${this.trunkSize}`)
    }

}
const lion1 = new Lion('LION','Africano',2)
const ele1 = new Elephantes ('ELEPHANT', 'Africano', 2, 'large')


ele1.toString()

