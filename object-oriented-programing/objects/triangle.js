const t1 = {
    a: 7,
    b: 10,
    c: 5
}

const isValidTriangle = (triangle) => {

    const { a, b, c} = triangle

   return  (b + c) > a && (a + c) > b && (a + b) > c

}

console.log(isValidTriangle(t1))