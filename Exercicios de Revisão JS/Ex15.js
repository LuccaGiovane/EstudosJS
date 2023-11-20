function retornaPares(listaDeNumeros)
{
    const novoArray = [];

    for(numero of listaDeNumeros)
    {
        if(numero % 2 == 0)
        {
            novoArray.push(numero)
        }
    }

    return novoArray
}

console.log(retornaPares([1,2,3,4,5,6,7,8,9]))