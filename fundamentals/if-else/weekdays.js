const prompt = require("prompt-sync")()

const day = parseInt(prompt('Digite un numero del 1-7: '))

switch(day){
    case 1:
        console.log('LUNES')
        break
    case 2:
        console.log('MARTES')
        break
    case 3:
        console.log('MIERCOLES')
        break
    case 4:
        console.log('JUEVES')
        break
    case 5:
        console.log('VIERNES')
        break
    case 6:
        console.log('SABADO')
        break
    case 7:
        console.log('DOMINGO')
        break
    default:
        console.log('Digite un numero valido')
}