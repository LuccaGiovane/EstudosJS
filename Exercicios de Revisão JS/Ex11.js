function receberPrimeiroEUltimoElemento(lista)
{
    let primeiroElemento = lista.shift();
    const ultimoElemento = lista.pop();

    console.log(`${primeiroElemento} , ${ultimoElemento}`)
}


receberPrimeiroEUltimoElemento([7, 14, "Olá"])
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16])