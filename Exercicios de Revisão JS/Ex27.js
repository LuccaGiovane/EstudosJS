function inverter(objeto)
{
    const objetoInvertido = {}

    for(let chave in objeto)
    {
        if(objeto.hasOwnProperty(chave))
        {
            objetoInvertido[objeto[chave]] = chave
        }
    }

    return objetoInvertido
}

const obj = { a: 1, b: 2 };
const objetoInvertido = inverter(obj);
console.log(objetoInvertido);