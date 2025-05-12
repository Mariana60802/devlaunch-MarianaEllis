const prompt = require("prompt-sync")()

const n = parseInt(prompt("Digite un numero: "))
var msg

if (n > 0) {
  msg = "Positivo"
} else if (n < 0) {
  msg = "Negativo"
} else if (n === 0){
  msg = "Cero"
} else{
  msg = "Por favor, digite un numero valido"
}

console.log(msg)