function filtraPorQuantidadeDeDigitos(arrayDeNumeros, quantidadeDigitos)
{
    const arrayDeNumerosEscolhidos = []

    return arrayDeNumeros.filter(numero => {const quantidadeDeDigitos =  String(numero).length

    return quantidadeDigitos == quantidadeDeDigitos})
}

console.log(filtraPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))