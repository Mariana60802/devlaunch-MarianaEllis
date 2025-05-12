const prompt = require('prompt-sync')()

const birthdate = prompt('What is your birthdate in format (YYYY/MM/DD)?')

const birthday = new Date(birthdate)

const today = new Date()

let age = today.getFullYear() - birthday.getFullYear() 

const birthdayPassed = (
today.getMonth() > birthday.getMonth() || 
    (
        today.getMonth() === birthday.getMonth() &&  
        today.getDate() >= birthday.getDate()
    )
)

if (!birthdayPassed){
    age--
}

if(age >= 18){
    console.log('Bienvenido al bar Moe')
} else {
    console.log('No puedes pasar hasta tener 18 anos o mas')
}