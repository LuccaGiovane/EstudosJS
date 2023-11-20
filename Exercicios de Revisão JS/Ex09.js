function repetir(valor, repeticoes)
{
    resultado = []

    for(let i=0; i < repeticoes; i++)
    {
        resultado.push(valor)
    }

    console.log(resultado)
}

repetir("codigo", 2)
repetir(7, 3)