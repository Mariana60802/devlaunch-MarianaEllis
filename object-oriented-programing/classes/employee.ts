
class Employee{

    constructor(
       public _firstName : string,
       private _salary : number
    ){
        this._firstName = _firstName
        this._salary = _salary

    }

    public giveRaise (amoutSalary : number){
        this.salary = this.salary + amoutSalary
        return this.salary
    }


    get salary ()  {
        return this._salary
    }
    
    set salary (newSalary : number){

        if (newSalary > 0 ){
            this._salary = newSalary
        }
    }
}

const e1 = new Employee('Mari', 100000)
e1.salary = 1
e1.giveRaise(2000)

console.log(e1.salary)