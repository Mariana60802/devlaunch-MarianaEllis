const prompt = require("prompt-sync")()


const  favFoodMaria = (prompt("Cual es su comida favorita Maria: "))
const  favFoodPepe = (prompt("Cual es su comida favorita Pepe: "))
const  favFoodMalvern = (prompt("Cual es su comida favorita Marlven: "))

const isMariaAndPepeSameFavFood = favFoodMaria === favFoodPepe
const isMariaAndMalvernSameFavFood= favFoodMaria === favFoodMalvern

const allMatch = isMariaAndMalvernSameFavFood && isMariaAndPepeSameFavFood
const someMatch = isMariaAndMalvernSameFavFood || isMariaAndPepeSameFavFood
const noMatch = !isMariaAndMalvernSameFavFood && !isMariaAndPepeSameFavFood

console.log(" Maria comparte la comida favorita con Pepe y Malvern: " + allMatch)
console.log(" La comida Favorita de Maria es la misma que la de Pepe o Malvern: " + someMatch)
console.log(" La comida favorita de Maria es diferente que la de Pepe y Malvern: " + noMatch)