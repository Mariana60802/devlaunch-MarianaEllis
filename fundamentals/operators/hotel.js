/*Calcule la factura total de una persona en un hotel
cada habitacion tiene un precio de $100 por noche, aprovechando una oferta promocional que incluye un descuento del 5%

El programa debe de solicitar al huesped el numero de noches que paso en el hotal para calcular la factura final.

Si el usuario final ingreso que se quedo 5 noches, la salida seran $475.00. */

const prompt = require("prompt-sync")()

console.log("Bienvenido al Hotel Dev")
const days = parseInt(prompt("Cuantos noches desea hospedarse: "))

const days_price = 100
const discount = 0.05

function total_price(days){
    let subtotal = days_price*days
    let discount_total= subtotal * discount 
    let total = subtotal - discount_total

    console.log("El total a pagar es: " + total)

}



total_price(days)
