function objetoParaArray(objeto)
{
    let listaDeArrays = Object.entries(objeto);

    console.log(listaDeArrays)
}

objetoParaArray({nome: "Lucca", idade: 24});