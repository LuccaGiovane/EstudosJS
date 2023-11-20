function menorNumero(numeros)
{
    numeros.sort((a, b) => a-b)

    return numeros[0]
}

console.log(menorNumero([1,5,-15,2,0]))