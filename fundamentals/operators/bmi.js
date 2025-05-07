const prompt = require("prompt-sync")()

console.log("Bienvenido hoy calcularemos tu imc")

const  name = prompt("Digite nombre: ")
const  peso = parseFloat(prompt("Digite peso corporal: "))
const  alt = parseFloat(prompt("Digite altura: "))

const imc = peso / Math.pow(alt , 2)

console.log("El IMC de " + name + " es: "  + imc.toFixed(2))