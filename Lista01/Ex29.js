function segundoMaior(arrayDeNumeros)
{
    const tamanho = arrayDeNumeros.length

    arrayDeNumeros.sort((a,b) => a - b)

    return arrayDeNumeros[tamanho - 2]
}

console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([122, 165, 1, 5, 9, 12345, 0, 88]))