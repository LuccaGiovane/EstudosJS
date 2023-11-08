function calcularMedia(numeros)
{
    let media = 0

    for(let numero of numeros)
    {
        media += numero
    }

    return media / 2
}

console.log("Media = " + calcularMedia([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) )
console.log("Media = " + calcularMedia([0, 10]) )