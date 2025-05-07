/*Programa que calcule el promedio de calificaciones de estudiantes en una escuela. Primero configuras el entorno para recibir entradas
del usuario, permitiendo que ingresen tres notas.
Luego, procesas estos datos para cualcular el promedio de manera precisa.
Finalmente, presentas el resultado fomatenado con maximos decimales, para asegurar una lectura clara.
Si el usuario ingresa calificaciones 80,70, y 90, la salida sera: 80*/

const prompt = require("prompt-sync")()

console.log("Bienvenido a la escuela Dev")

const  nota1 = parseFloat(prompt("Digite nota 1: "))
const  nota2 = parseFloat(prompt("Digite nota 2: "))
const  nota3 = parseFloat(prompt("Digite nota 3: "))
const  grades_amount = 3
const  max_digits  = 2



function calcula_promedio(nota1, nota2, nota3, grades_amount){
    const promedio = (nota1 +  nota2 + nota3) / grades_amount
    console.log("Su promedio es de:"+ parseFloat(promedio.toFixed(max_digits)))
}

calcula_promedio(nota1, nota2 , nota3,grades_amount)
