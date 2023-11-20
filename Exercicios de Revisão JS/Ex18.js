function despesasTotais(produtos)
{
    var totalDespesas = 0

    for(let produto of produtos)
    {
        totalDespesas += produto.preco
    }

    return totalDespesas
}

console.log(despesasTotais([
    {nome: "jornal online", categoria: "informação", preco: 89.99},
    {nome: "cinema", categoria: "entreterimento", preco: 150}
    ]))