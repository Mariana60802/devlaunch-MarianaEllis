const prompt = require("prompt-sync")()



function calculateSalary (hourlyRate,startTime,endTime){

    const [startHour] = startTime.split(":")
    const [endHour] = endTime.split(":")

    const workedDays = endHour - startHour

    let salary = 0

    if(workedDays <= 8){
        salary = hourlyRate * workedDays
    }else{
        const extraHours=  workedDays - 8
        salary = (hourlyRate * 8 ) + ((extraHours * hourlyRate) * 1.5)
    }

    return salary
}

function main() {

    const hourlyRate = parseFloat(prompt("Hourly Rate $: "))
    const startTime = prompt("Start Time: ")
    const endTime = prompt("End Time: ")

    const salary = calculateSalary(hourlyRate,startTime,endTime)

    console.log( "SALARY $" + salary)
}

main()