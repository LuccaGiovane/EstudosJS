function funcaoDaSorte(numero)
{
    let valorSorteado = Math.floor(Math.random() * 11)

    if(numero == valorSorteado)
    {
        console.log((`PARABENS! O número sorteado foi o ${valorSorteado}`))
    }
    else
    {
        console.log(`Que pena! O número sorteado foi o ${valorSorteado}`)
    }
}

funcaoDaSorte(0)
funcaoDaSorte(2)
funcaoDaSorte(5)