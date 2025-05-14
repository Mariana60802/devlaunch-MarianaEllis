/* 
-Estudiantes deben de ayudar a lab y aprobar 4 materias, calificaciones promediadad para verificar la eligibilidad.
-Estudiantes tener promedio de caalificaciones de 9 o mas en todas las materias, sin ninguna calificacion invidual menor a 8, 
independientement de como les fue como asistentes de laboratorop 
-alternativamente, si tienen un promedio de 8.5 o mas, aun pueden calificar si obtuvieron una calificacion de A o B como asistentes de lab
-Sin embargo, si obtuvierpm uma calificacion como C como asistentes de Lab, no calificaran para la beca. Incluso si la calif es genial
*/

const prompt = require("prompt-sync")()

function main(){

    const mat1 = parseFloat(prompt("Introduzca nota de materia 1, con formarto del 1 al 10:  "))
    const mat2 = parseFloat(prompt("Introduzca nota de materia 2, con formarto del 1 al 10:  "))
    const mat3 = parseFloat(prompt("Introduzca nota de materia 3, con formarto del 1 al 10:  "))
    const mat4 = parseFloat(prompt("Introduzca nota de materia 4, con formarto del 1 al 10:  "))
    const lab = prompt("Introduzca nota del laboratorio, con formato de A a C: ")

    const esElegible = obtieneBeca(mat1, mat2, mat3, mat4 , lab)

    if(esElegible){
        console.log("Felicidades ganaste la beca")
    }else{
        console.log("Intentalo de nuevo, no eres elegible para la beca ")
    }

}

const reject_lab_grade = "C"
const cantidad_mat = 4
const min_grade = 8
const min_promedio_grade = 8.5
const fast_forward_grade = 9

function obtieneBeca(mat1, mat2, mat3, mat4 , lab){

    if(lab === reject_lab_grade) return false

    if(mat1 < min_grade || mat2 < min_grade || mat3 < min_grade || mat4 < min_grade ){
        return false
    }

    const promedio = (mat1 + mat2 + mat3 + mat4) / cantidad_mat

    if (promedio < min_promedio_grade ){
        return false
    } else{
        if(promedio < fast_forward_grade && !(lab === "A" ||  lab === "B")){
            return false 
        }
    }
    return true
}

main()
