type TraficLevel = 'low' | 'medium' | 'high'


class Airport {

    public name : string
    public location : string
    public runwayStatus : boolean
    public traficLevel : TraficLevel

    constructor(
        name : string,
        location : string
    ){
        this.name = name,
        this.location = location,
        this.runwayStatus = true,
        this.traficLevel = 'low'
    }

    public get trafficLevel (){
        return this.traficLevel
    }

    public set trafficLevel (traficLevel : TraficLevel){
        this.traficLevel = traficLevel
    }


    public set runWayStatus (newRunWayStatus : boolean){
        this.runWayStatus = newRunWayStatus
    }


    public changeTrafficLevel = ( newTraficLevel : TraficLevel) : void => {
        this.traficLevel = newTraficLevel
        console.log(`The level of the traffic change to ${newTraficLevel} in the airport ${this.name}`)
    }

    public emergencyLanding = () => {
        this.traficLevel = 'high'
        this.runwayStatus = false
        console.log(`Runway closed in airport ${this.name}, traffic level ${this.trafficLevel}`)

    }

    public displayInfo = () => {
        console.log(`Airport Name = ${this.name}`)
        console.log(`Airport Location = ${this.location}`)
        console.log(`Airport Runway Status = ${this.runWayStatus}`)
        console.log(`Airport Traffic Level = ${this.trafficLevel}`)
    }

}

const airport1 = new Airport('SJO', 'CR')
airport1.displayInfo()
airport1.changeTrafficLevel('medium')
airport1.displayInfo()
airport1.emergencyLanding()
airport1.displayInfo()