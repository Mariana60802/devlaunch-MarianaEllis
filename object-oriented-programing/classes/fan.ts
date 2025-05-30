type FanType = 'A' | 'B' | 'C'
type FanColor = 'white' | 'black' | 'grey'
type FanSize = 'small' | 'medium' | 'large'

class Ventilador {

    constructor (
        public speed : number,
        public size: FanSize,
        public power: number,
        public type: FanType,
        public color: FanColor
    ){
        this.speed = 0
        this.size = size
        this.power = power
        this.type = type
        this.color = color
    }

    public getSpeed() {
        return this.speed
    }

    public setSpeed(speed : number) {
        this.speed = speed
    }

    public getSize () {
        return this.size
    }

    public setSize (size : FanSize) {
        this.size = size
    }
    
    public getPower () {
        return this.power
    }

    public setPower (power : number) {
        power = this.power
    }

    public getType () {
        return this.type
    }

    public setType (type : FanType) {
        this.type = type
    }

    public getColor () {
        return this.color
    }

    public setColor (color : FanColor) {
        this.color = color
    }

}


const fan1 = new Ventilador(122,'small',500,'A','white')
console.log(fan1)

fan1.setSpeed(100)
fan1.setSize('medium')
fan1.setType('B')
fan1.setColor('grey')

console.log(fan1)

