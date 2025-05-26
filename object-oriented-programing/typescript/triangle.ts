import { Prompt } from './../../node_modules/@types/prompt-sync/index.d';

interface Triangle{
    a: number
    b: number
    c: number
}
const t1 : Triangle= {
    a: 7,
    b: 10,
    c: 5
}

const isValidTriangle = ({ a, b, c} : Triangle) => { //destructurar parametros de un objeto por medio de un parametro const { a, b, c} = triangle
   return  (b + c) > a && (a + c) > b && (a + b) > c

}

console.log(isValidTriangle(t1))

