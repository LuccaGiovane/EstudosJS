function buscarPalavrasSemelhantes(palavraAlvo, arrayPalavras)
{
    const semelhantes = []

    for(let palavra of arrayPalavras)
    {
        if(palavra.includes(palavraAlvo))
        {
            semelhantes.push(palavra)
        }
    }

    return semelhantes
}

console.log(buscarPalavrasSemelhantes("java", ["javascript", "java" , "C++"]))