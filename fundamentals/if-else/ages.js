const prompt = require('prompt-sync')()

const age = parseInt(prompt('Digite su edad: '))

const msg = (
(age >= 0 && age < 3)
    ? console.log("Ere un bebe")
    : (age >=3 && age <=13)
        ? console.log('Eres un nino(a)')
        : (age >= 14 && age <= 17)
            ? console.log('Eres un adolecente')
            : (age >= 15 && age <= 18)
                ? console.log('Eres un joven adulto')
                : (age >= 30 && age <= 60)
                    ? console.log('Eres un adulto')
                    : console.log("La institucion no soporta tu edad, intentalo de nuevo")
)


//console.log(msg ? msg : "La institucion no soporta tu edad, intentalo de nuevo")