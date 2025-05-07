const days_per_month = 30

const prompt = require("prompt-sync")()

const days = parseInt(prompt("Digite la cantidad de dias: "))

const months = Math.floor(days / days_per_month)

const days_left = days - (months * days_per_month)

console.log (days + " days are in "+ months + " months and " + days_left + " days.")





