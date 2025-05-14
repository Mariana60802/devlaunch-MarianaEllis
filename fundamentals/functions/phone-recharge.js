
/*
Pormocion valida si recargan minimo de $20 y maximo de $80 y haber estados suscritos al menos un ano.

Promocion SuperSaver, los clientes pueden disfrutar de un monto de recarga duplivado si su recarga es inferioir a $38 y han estado 
afiliados por tres anos o menos.

por otro lado, MegaRechargenes para los que estas afiliados por mas de 3 anos , ofreciendoles un monto de regarga triplicado independ
del monto recargado.

Tu tarea es pedir nombre de cliente, monto de regarga, y duracion de suscripcion. y determine la promocion que le aplica. Y 
calcule el monto de recarga incluyendo la promocion
 */

const prompt = require('prompt-sync')()

const MIN_MONTHS_SUBCRIPTION = 12
const MIN_AMOUNT = 20
const MAX_AMOUNT = 80

const MEG_PROMO_MIN_SUBCRIPTION = 36
const MEG_PROMO_MULTIPLIER = 3

const SUPER_PROMO_MULTIPLIER = 2
const SUPER_MIN_AMOUNT = 38

function calculateRecharge(amount, subscription){

    if (subscription < MIN_MONTHS_SUBCRIPTION ) return amount
    
    let multiplier = 1

    if(subscription  > MEG_PROMO_MIN_SUBCRIPTION) {
        multiplier = MEG_PROMO_MULTIPLIER
    }else if (subscription <= MEG_PROMO_MIN_SUBCRIPTION){
        if((amount >= MIN_AMOUNT || amount <= MAX_AMOUNT ) && amount <= SUPER_MIN_AMOUNT ){
            multiplier = SUPER_PROMO_MULTIPLIER
        }
    }

   return amount * multiplier
}

function main(){

    const name = prompt("Name: ")
    const amount = parseFloat(prompt("Recharge $:  "))
    const subscription = parseInt(prompt("Suscripcion Months:  "))

    const recharge = calculateRecharge(amount, subscription)
    const promo = recharge-amount

    
    
    console.log("Su regarga es de: " + recharge +  " Y la promo de: " + promo)
}

main()