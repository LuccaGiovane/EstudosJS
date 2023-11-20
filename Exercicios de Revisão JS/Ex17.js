function somarNumeros(listaDeNumeros)
{
    let total = 0

    for(numero of listaDeNumeros)
    {
        total += numero
    }

    return total
}

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))